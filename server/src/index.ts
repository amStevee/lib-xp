import express,{Request, Response, NextFunction} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { CustomError, globalErrorHandler } from './utils/errorHandler';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));

const port = process.env.PORT || 8000;

app.all('*', (req:Request, res:Response, next: NextFunction) => {
    const err = new CustomError(`route for ${req.originalUrl} not found`, 404)
    next(err)
});

app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})