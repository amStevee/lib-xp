import * as bcrypt from 'bcrypt';
import { CustomError } from './errorHandler';
import db from '../config/prismaClient';
import { User } from '../entities/User';

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
            
        // hash password and compare with db hash
        if (user.password) {
        
            const isPassword = await bcrypt.compare(password, user.password);

            if (!isPassword) return new CustomError('Invalid cridentials', 400);
        }
            
        return {...user, password: null};

    } catch (error:any) {
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