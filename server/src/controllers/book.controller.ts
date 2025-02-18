import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";
import { crossCheckClientData } from "../utils/verifyClientData";
import { Book } from "../entities/Book";
import { User } from "../entities/User";
import { BookService } from "../services/book.service";

const bookService = new BookService();

export class BookController {
    async  addNewBook(req:Request, res:Response, next:NextFunction) {
       const qdata = crossCheckClientData<Book>(req.body);

       if (qdata instanceof CustomError) return next(qdata);
    
       const newBook = await bookService.create(qdata);
    
       res.status(201).json({...newBook});
    
    }
    
    async  getAllBooks(req:Request, res:Response, next:NextFunction) {
       const {limit, page} = req.query;
    
       try {
           const books = await bookService.findAll(Number(limit), Number(page));
    
           res.json({msg: 'success', data: [...books]})
       } catch (error:any) {
           next(new CustomError(error.message, 500))
       }
    }
    
    async  getBook(req:Request, res:Response, next:NextFunction) {
       const {id} = req.params;
       const {title, author} = req.body;
       let book;
    
       
       try {
           if (title) {
               book = await bookService.findUnique(null ,title, null)
           } else if (author) {
               book = await bookService.findUnique(null, null, author)
           }else {
               if (!id) return next(new CustomError('book id not found', 404));
               book = await bookService.findUnique(id, null, null);     
           }
    
           res.status(200).json({...book});
       } catch (error: any) {
           next(new CustomError(error.message, 500))
       }
    }
    
    async  deleteBook(req:Request, res:Response, next:NextFunction) {
       const {id} = req.params;
    
       if (!id) return next(new CustomError('book id not found', 404));
    
       try {
           const book = await bookService.delete(id);
    
           if(!book) next(new CustomError('failed to delete book', 500));
    
           res.status(200).json({msg: 'Book successfully deleted'});
       } catch (error: any) {
           next(new CustomError(error.message, 500))
       }
    }
    
    async  toggleBookLike(req:Request, res:Response, next:NextFunction) {
       const {book_id} = req.params;
       if (!book_id) return next(new CustomError('book id not found', 404));
    
       const patron_id = (req.user as User).id;
       if (!patron_id) return next(new CustomError('unauthorize', 403));
    
       try {
           
           const like = bookService.likeBook(book_id, patron_id);
    
           if (!like) return next(new CustomError('failed', 400));
    
           res.status(200).json({msg: 'successfuly'});
       } catch (error: any) {
           next(new CustomError(error.message, 500))
       }
    }
}



// Book Consulted
