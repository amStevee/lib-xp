import { CriculationRepository } from "../repositories/circulation.repository";

const criculationRepository = new CriculationRepository()

export class CriculationService {
    async findPendingCheckout() {
        const circulationData = await criculationRepository.findPendingCheckout();
        return circulationData;
    }
}