import {PrismaClient} from '@prisma/client';
import cachFunc from '../utils/cashFunction';


const db = new PrismaClient().$extends({
    name: 'cach result',
    query: {
        book: {
            async findMany({args, model, operation, query}) {
                return await cachFunc({args, model, operation, query});
            }
        }
    }
})


export default db;

