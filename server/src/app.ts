import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { globalErrorHandler, routeNotFound } from './utils/errorHandler';
import { limiter } from './middleware/rateLimit';
// Import routes
import PatronRoute from './routes/auth-routes/auth.routes';

dotenv.config();

const app = express();

// Middleware
import './config/prisma-session';
app.use(cors({
    origin: '*',
    credentials: true,
    maxAge: 60 * 1000
}));
app.use(limiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/api/v1/user', PatronRoute);

// Error handling
app.all('*', routeNotFound);
app.use(globalErrorHandler);


export default app;