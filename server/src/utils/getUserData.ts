import bcrypt from 'bcrypt';
import { User } from '../types';
import { CustomError } from './errorHandler';
import db from '../config/db';
import { BACKEND_BASE_URL } from '../config/constants';

let failCount = 0;

export default async function getUserData({email, password}:User) {
    if(!email || !password) {
        return new CustomError('email and password needed', 400);
    }
    
    try {
        // check if user exist in db
        const user = await db.patron.findUnique({where: {email}});
        if(!user) 
            return new CustomError('user not registered', 404);

        if (user.google_Id) return `${BACKEND_BASE_URL}/oauth2/google`

        // handle user not logged in with google
        if (!user.google_Id) {
            if (!user.password) {
                if (process.env.NODE_ENV === 'development') {
                    return new CustomError('password not assigned to user without google_id this shouldn\'t be', 500); // ***comback to handle this error***
                }
                return new CustomError('serverError: something went wrong on our end', 500);
            }
        // hash password and compare with db hash
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const isPassword = await bcrypt.compare(user.password, hash);
        
        if (!isPassword) return new CustomError('Invalid cridentials', 400);
        }
        

        return {...user, password: null};

    } catch (error:any) {
        console.log(error.name)
        if (error.name === 'PrismaClientInitializationError') {
            if (failCount > 3) {
                return new CustomError('connectionError:Unable to connect to DB', 500)
            } else {
                console.log(`connectionError: reconnecting to db ----- attempt - ${failCount} of 3`)
                failCount += 1;
                return getUserData({email, password});
            }
            
        }
        return new CustomError(error.message, 500);
    }
    
}