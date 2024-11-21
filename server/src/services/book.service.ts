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

    async findUnique(id:string | null, title:string | null, author:string | null) {
        let book;
        if (title) {
            book = bookRepository.findUnique(null, title, null);
        } else if (author) {
            book =  bookRepository.findUnique(null, null, author);
        }else {
            book = bookRepository.findUnique(id, null, null);;      
        }

        return book;
    }

    async likeBook(book_id:string, patron_id:string) {
        const like = bookRepository.toggleBookLike(book_id, patron_id);
        
        return like
        
    }

    async delete(id:string) {
        const book = bookRepository.delete(id);
        return book;
    }
}