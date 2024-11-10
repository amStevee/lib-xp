import { NextFunction, Request, Response } from 'express';
import getUserData from '../utils/getUserData';
import jwt from 'jsonwebtoken';
import { CustomError } from '../utils/errorHandler';
import passport from 'passport';
import * as bcrypt from 'bcrypt';
import db from '../config/db';
import { crossCheckClientData } from '../utils/verifyClientData';
import { User } from '../entities/User';


export async function signup(req:Request, res:Response, next:NextFunction) {
    const requiredFilds = {
        firstname: 'firstname',
        lastname: 'lastname',
        displayname: 'displayname',
        address: 'address',
        email: 'email',
        password: 'password'
    }
    const userData = crossCheckClientData(req.body, requiredFilds);
    if (userData instanceof CustomError) return next(userData);

    const user: Omit<typeof userData, 'id' | 'google_Id'> = userData;
    try {
        // Verify user email before proceeding.
        // 
        // 
        // //

        // Hash password
        if(!user.password) return next(new CustomError('password required', 403));
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        
    
        // Check if user alredy exist
        const isUser = await db.patron.findUnique({where: {email: user.email}});
        if (isUser) return next(new CustomError('user already exist', 403));
        
        const newUser = await db.patron.create({
            data: { firstname: user.firstname, lastname: user.lastname, displayname: user.displayname, email: user.email, password: hash}
        });
    
        const expTimeFrame = process.env.NODE_ENV === 'development' ? "60d" : "1h";
        if (!process.env.JWT_SECRET) return next(new CustomError('secret_key needed', 400));
        const token = jwt.sign(newUser, process.env.JWT_SECRET, {expiresIn: expTimeFrame});

        // REMOVE 
        console.log(token)
    
        res.setHeader('Authorization', `Bearer ${token}`);
        res.status(200).json({
            msg: 'account created successfully', 
            data: {...newUser, password:null}
        });
    } catch (error:any) {
        if (process.env.NODE_ENV === 'production' && error.message.includes('Invalid `db.patron.create()`')) {
            return next(new CustomError('faild to create account please try again', 500));
        }
        next(new CustomError(error.message, 500));
    }
}


export async function signin(req:Request, res:Response, next:NextFunction) {
    const userData = crossCheckClientData<User>(req.body, {email: 'email', password: 'password'});
    if (userData instanceof CustomError) return next(userData);
 
    try {
        const user = await getUserData(userData);
        
        if(user instanceof CustomError) return next(user);
        
        const expTimeFrame = process.env.NODE_ENV === 'dev' ? "60d" : "1h";
        if (!process.env.JWT_SECRET) return next(new CustomError('secret_key needed', 400));
        const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: expTimeFrame});
    
        const data = {id:user.id, email:user.email, firstname:user.firstname, lastname:user.lastname, profile_img: user.profile_img};
        
        res.setHeader("Authorization", `Bearer ${token}`);
        res.status(200).json({msg: 'Signed in', data: {...data}});
    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}

export async function signout(req:Request, res:Response, next:NextFunction) {
    req.logout((err) => {
        if (err) {
          return res.status(500).send('Failed to log out');
        }
        res.redirect('/'); 
      });
}
export const signin_google = passport.authenticate('google');

export const google_redirect = async function (req:Request, res:Response) {
    // res.redirect(FRONTEND_BASE_URL);
    res.redirect('/');
}