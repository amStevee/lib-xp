import db from "../config/prismaClient";
import { CustomError } from "../utils/errorHandler";

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
    async findCloseDueDate() {
        return db.circulation.findMany();
    }

//   book_id String @unique
//   patron_id String @unique
//   checkout DateTime @default(now())
//   date_due DateTime

    async checkin(book_id:string, patron_id:string, date_due:Date) {
        const isAvailable = await db.book.findUnique({where: {id:book_id}});
        if(!isAvailable?.availability) throw new CustomError('book not availble', 403);
        return db.$transaction([
            db.circulation.create({data: {
                date_due,
                book_id,
                patron_id,
            }}),
            db.book.update({where: {id:book_id}, data: {availability: false}}),
        ])
    }
}