import { CriculationRepository } from "../repositories/circulation.repository";

const criculationRepository = new CriculationRepository()

export class CriculationService {
    async findPendingCheckout() {
        const circulationData = await criculationRepository.findPendingCheckout();
        return circulationData;
    }

    async findCloseDueDate() {
        const result = await criculationRepository.findCloseDueDate();
        return result;
    }

    async checkin(book_id:string, patron_id:string, date_due:Date) {
        return await criculationRepository.checkin(book_id, patron_id, date_due);
    }

    async checkout(book_id:string, patron_id:string) {
        return await criculationRepository.checkout(book_id, patron_id)
    }
}