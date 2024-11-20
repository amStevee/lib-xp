import db from "../config/prismaClient";
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
}