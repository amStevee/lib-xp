import {prisma as db} from "../config/prismaClient";
import { Book } from "../entities/Book";
import { CustomError } from "../utils/errorHandler";


export class BookRepository {
    async create(book:Book) {
        const isBook = await db.book.findMany({where: {material_number: book.material_number}});

        if (isBook.length) throw new CustomError(`Book already exit ${isBook}`, 400);

        return db.book.findMany({where: {material_number: book.material_number}});
    }

    async findAll(limit:number, page:number) {
    
        return db.book.findMany({ take:limit || 10, skip: page});
    }

    async findUnique(id:string | null, title:string | null, author:string | null) {
        let book;
        if (title) {
            book = db.book.findMany({where: {title: {contains: title}}, include: {book_likes: true}});
        } else if (author) {
            book =  db.book.findMany({where: {author: {contains: author}}, include: {book_likes: true}});
        }else {
            if (!id) throw new CustomError('book id not found', 404);
            book = db.book.findUnique({where: {id: id}, include: {book_likes: true}});     
        }
        return book;
    }

    async toggleBookLike(book_id:string, patron_id:string) {
        const isBookLiked = await db.book_likes.findMany({where: {book_id: book_id}});
        if (isBookLiked.length) {
            return db.book_likes.delete({where: {patron_id}});
        }else {
            return db.book_likes.create({data: {
                book_id: book_id,
                patron_id
            }})
        }
        
    }

    async delete(id:string) {
        return db.book.delete({where: {id: String(id)}});
    }
}