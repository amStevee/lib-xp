import bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { UserData } from '../types';
import { CustomError } from './errorHandler';
import prisma from '../config/db';

export default async function verifyUserData({uemail, password}:UserData, next:NextFunction) {
    if(!uemail || !password) {
        const err = new CustomError('email address and password needed', 400);
        return next(err);
    }

    // check if email exist in db
    const user = await prisma.patron.findUnique({where: {email:uemail}});

    // if no
    if(!user) return next(new CustomError('Invalid cridentials', 400));
    // else
    // compare password to verify user
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const cmpPassword = await bcrypt.compare(hash, user.email);

    if(!cmpPassword) return next(new CustomError('Invalid cridentials', 400));

    const {id, email, firstname, lastname} = user;

    return {id, email, firstname, lastname};
}