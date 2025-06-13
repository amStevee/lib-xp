import express from 'express';
import cors from 'cors';
import { limiter } from './middleware/rateLimit';
import Session from './config/prisma-session';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { globalErrorHandler, routeNotFound } from './utils/errorHandler';
// Import routes
import authRoute from './routes/auth.routes';
import bookRoute from './routes/book.routes';
import usersRoute from './routes/users.routes';
import verifyEmail from './routes/verifyEmail.routes';
import circulationRoute from './routes/circulation.routes';
import passportMiddleware from './config/passport-setup';
import passport from 'passport';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    credentials: true,
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(limiter);
passportMiddleware();
app.use(Session);
app.use(passport.initialize());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.get('/', (req, res) => {
    res.status(200).json({msg: 'success', data: 'Hello world'})
})
app.use('/oauth2', authRoute);
app.use('/books', bookRoute);
app.use('/users', usersRoute);
app.use('/circulation-status', circulationRoute);
app.use('/user', verifyEmail);


// Error handling
app.all('*', routeNotFound);
app.use(globalErrorHandler);


const port = process.env.PORT || 8000;
app.listen(port, async () => {
    console.log(`server is running on port ${port}`);
})