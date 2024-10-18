import express from 'express';
import cors from 'cors';
import { limiter } from './middleware/rateLimit';
import Session from './config/prisma-session';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { globalErrorHandler, routeNotFound } from './utils/errorHandler';
// Import routes
import authRoute from './routes/auth-routes/auth.routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    credentials: true,
    maxAge: 60 * 1000
}));
app.use(limiter);
app.use(Session);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/oauth2', authRoute);

// Error handling
app.all('*', routeNotFound);
app.use(globalErrorHandler);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})