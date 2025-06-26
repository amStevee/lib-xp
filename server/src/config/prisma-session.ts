import expressSession from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

import {prisma as db} from './prismaClient';
import dotenv from 'dotenv';
dotenv.config()

// if (!process.env.SESSION_SECRET)  throw new CustomError('session secret not provided', 403);

const Session = expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: process.env.SESSION_SECRET || '',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      db,
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
});

export default Session;
