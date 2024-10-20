import { NextFunction, Request, Response } from 'express';
import getUserData from '../../utils/getUserData';
import jwt from 'jsonwebtoken';
import { CustomError } from '../../utils/errorHandler';
import passport from 'passport';


export async function signin(req:Request, res:Response, next:NextFunction) {

    const user = await getUserData(req.body);

    if(user instanceof CustomError) return next(user);

    const token = jwt.sign(user, 'key', {expiresIn: "60d"});

    const data = {id:user.id, email:user.email, firstname:user.firstname, lastname:user.lastname, profile_img: user.profile_img};
    
    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({msg: 'Signed in', data: {...data}});
}

export async function signout(req:Request, res:Response, next:NextFunction) {
    // hanndle with passport
}
export const signin_google = passport.authenticate('google', { scope: ['profile'] });

export const google_redirect = passport.authenticate('google', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/auth0/login'
})