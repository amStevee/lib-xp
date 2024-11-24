import db from "../config/prismaClient";

export class CriculationRepository {
    async findPendingCheckout() {
        const circulationData = await db.circulation.findMany();
        const pendingCheckout = circulationData.map(async(crc) => {
            await db.patron.findMany({where: {
                id: {equals: crc.patron_id}
            }})
        });
        return pendingCheckout
    }
}