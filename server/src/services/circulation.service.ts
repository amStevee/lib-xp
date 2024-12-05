import { CriculationRepository } from "../repositories/circulation.repository";

const criculationRepository = new CriculationRepository()

export class CriculationService {
    async findPendingCheckout() {
        return await criculationRepository.findPendingCheckout();    
    }

    async findCloseDueDate() {
        return await criculationRepository.findCloseDueDate();   
    }

    async findAllBorrowedBooks() {
        return await criculationRepository.findAllBorrowedBooks();
    }

    async checkin(book_id:string, patron_id:string, date_due:Date) {
        return await criculationRepository.checkin(book_id, patron_id, date_due);
    }

    async checkout(book_id:string, patron_id:string) {
        return await criculationRepository.checkout(book_id, patron_id)
    }
}