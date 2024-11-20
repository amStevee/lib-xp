import { NextFunction, Request, Response } from "express";
import db from "../config/prismaClient";
import { CustomError } from "../utils/errorHandler";
import { crossCheckClientData } from "../utils/verifyClientData";
import { Book } from "../entities/Book";
import { User } from "../entities/User";
import { BookService } from "../services/book.service";

const bookService = new BookService();

export async function addNewBook(req:Request, res:Response, next:NextFunction) {
    const qdata = crossCheckClientData<Book>(req.body);

    if (qdata instanceof CustomError) return next(qdata);

    const newBook = await bookService.create(qdata);

    res.status(200).json({...newBook});

}

export async function getAllBooks(req:Request, res:Response, next:NextFunction) {
    const {limit, page} = req.query;

    try {
        const books = await bookService.findAll(Number(limit), Number(page))
        //  include: {book_likes: {where: {book_id: id}}}

        res.json({msg: 'success', data: [...books]})
    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}

export async function getBook(req:Request, res:Response, next:NextFunction) {
    const {id} = req.params;

    if (!id) return next(new CustomError('book id not found', 404));

    try {
        const book = await db.book.findUnique({where: {id: String(id)}, include: {book_likes: {where: {book_id: id}}}});

        res.status(200).json({...book});
    } catch (error: any) {
        next(new CustomError(error.message, 500))
    }
}

export async function deleteBook(req:Request, res:Response, next:NextFunction) {
    const {id} = req.params;

    if (!id) return next(new CustomError('book id not found', 404));

    try {
        const book = await db.book.delete({where: {id: String(id)}});

        res.status(200).json({msg: 'success'});
    } catch (error: any) {
        next(new CustomError(error.message, 500))
    }
}

// Work on this later for now i'll leave as it is.
export async function likeBook(req:Request, res:Response, next:NextFunction) {
    const {id} = req.params;
    if (!id) return next(new CustomError('book id not found', 404));

    const patron_id = (req.user as User).id;
    if (!patron_id) return next(new CustomError('unauthorize', 403));

    try {
        const isBook = await db.book_likes.findMany({where: {book_id: id}});
        if (isBook.length) {
            await db.book_likes.delete({where: {patron_id}});
            return next(new CustomError('book unlike successfull', 200))
        }
        
        const like = await db.book_likes.create({data: {
            book_id: id,
            patron_id
        }})

        if (!like) return next(new CustomError('failed to like book', 400));

        res.status(200).json({msg: 'successfuly like books'});
    } catch (error: any) {
        next(new CustomError(error.message, 500))
    }
}


// Book Consulted
