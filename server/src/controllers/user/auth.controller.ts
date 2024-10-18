import { NextFunction, Request, Response } from 'express';
import verifyUserData from '../../utils/verifyUserData';
import jwt from 'jsonwebtoken';
import { CustomError } from '../../utils/errorHandler';

export async function signin(req:Request, res:Response, next:NextFunction) {

    const user = await verifyUserData(req.body, next);

    if(!user) return next(new CustomError('could not sigin acount', 500));

    const token = jwt.sign(user, 'key', {expiresIn: "60d"});

    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({msg: 'Signed in', user});
}

export async function signout(req:Request, res:Response, next:NextFunction) {
    // hanndle with passport
}
export async function signin_google(req:Request, res:Response, next:NextFunction) {
    // hanndle with passport
}

export async function google_redirect(req:Request, res:Response, next:NextFunction) {
    // hanndle with passport
}