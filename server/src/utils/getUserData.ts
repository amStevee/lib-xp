import bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { UserData } from '../types';
import { CustomError } from './errorHandler';
import db from '../config/db';

let failCount = 0;

export default async function getUserData({email, password}:UserData) {
    if(!email || !password) {
        return new CustomError('email and password needed', 400);
    }
    
    try {
    //     // check if user exist in db
    // const user = db.patron.findUnique({where: {email}});
    // if(!user) 
    //     return new CustomError('user not registered \n register[http://localhost:8000/oauth2/google] ?', 404);
    
    // // hash password and compare with db hash
    // const salt = await bcrypt.genSalt(10);
    // const hash = await bcrypt.hash(password, salt);
    // const isPassword = await bcrypt.compare(user.password, hash);
    
    // if (!isPassword) return new CustomError('Invalid cridentials', 400);

    // const data = {id:user.id, email:user.email, firstname:user.firstname, lastname:user.lastname};

    return {email, password};

    } catch (error:any) {
        if (error.name === 'PrismaIn') {
            if (failCount > 3) return new CustomError('Unable to connect to db', 500);
            setTimeout(() => {getUserData({email, password}), 2000});
            failCount += 1;
        }
        return new CustomError(error.message, 500);
    }



    
}