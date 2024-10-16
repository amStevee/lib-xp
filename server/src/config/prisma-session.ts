import expressSession from 'express-session';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import app from '../app';
import prisma from './db';
import dotenv from 'dotenv';
dotenv.config()

export default app.use(
  expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      prisma,
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);
