import {PrismaClient} from '../generated/prisma';
import cachFunc from '../utils/cashFunction';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

const prisma = new PrismaClient()

// prisma.$use(cachFunc);
prisma.$extends({
    name: 'cach result',
    query: {
        book: {
            async findMany({args, model, operation, query}) {
                return await cachFunc({args, model, operation, query});
            }
        }
    }
})

// Connect to the database using Prisma Client
const connectToDatabase = async () => {
    try {
        await prisma.$connect().finally(async() => await prisma.$disconnect());
        console.log(`Connected to database in ${process.env.NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}

export default connectToDatabase;


