import { FieldRef } from "@prisma/client/runtime/library";
import {prisma as db} from "../config/prismaClient";
import { CustomError } from "../utils/errorHandler";

export class CriculationRepository {
    async findPendingCheckout() {
        const circulationData = await db.circulation.findMany();
        interface Circulation {
            id: string;
            book_id: string;
            patron_id: string;
            date_due: Date;
            // add other fields as needed
        }

        interface Patron {
            id: string;
            // add other fields as needed
        }

        const pendingCheckout: Promise<Patron[]>[] = circulationData.map(async (crc: Circulation): Promise<Patron[]> => {
            return db.patron.findMany({
            where: {
                id: { equals: crc.patron_id }
            }
            });
        });
        return pendingCheckout
    }
    async findCloseDueDate() {
        return db.circulation.findMany();
    }

    async findAllBorrowedBooks() {
        let booksArr: string[] | FieldRef<"Book", "String[]"> | undefined = [];
        interface Circulation {
            id: string;
            book_id: string;
            patron_id: string;
            date_due: Date;
            // add other fields as needed
        }

        const circulations: Circulation[] = await db.circulation.findMany();
        circulations.map((bkd: Circulation): void => {
            booksArr!.push(bkd.book_id);
        });

        return db.book.findMany({where: {id: {in: booksArr}}});
        

    }

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

    async checkout(book_id:string, patron_id:string) {
        const isUser = await db.circulation.findFirst({where: {book_id, patron_id}});

        if (isUser?.patron_id !== patron_id) 
            throw new CustomError('Unauthorize', 403);
        
        return db.$transaction([
            db.book.update({where: {id: book_id}, data: {availability: true}}),
            db.circulation.delete({where: {book_id}}),
        ])
    }
}