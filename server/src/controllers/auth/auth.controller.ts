import { NextFunction, Request, Response } from 'express';
import getUserData from '../../utils/getUserData';
import jwt from 'jsonwebtoken';
import { CustomError } from '../../utils/errorHandler';
import passport from 'passport';
import { FRONTEND_BASE_URL } from '../../config/constants';


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
    // req.logOut()
    res.send('You reached the signout route')
}
export const signin_google = passport.authenticate('google');

export const google_redirect = async function (req:Request, res:Response) {
    // res.redirect(FRONTEND_BASE_URL);
    res.redirect('/');
}