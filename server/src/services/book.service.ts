import { Book } from "../entities/Book";
import { BookRepository } from "../repositories/book.repository";

const bookRepository = new BookRepository()

export class BookService {
    async create(book:Book) {
        const newBook = bookRepository.create(book);
        return newBook;
    }

    async findAll(limit:number, page:number) {
        const books = bookRepository.findAll(limit, page);
        return books;
    }
}