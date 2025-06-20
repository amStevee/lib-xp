import { NextFunction, Request, Response } from 'express';
import getUserData from '../utils/getUserData';
import jwt from 'jsonwebtoken';
import { CustomError } from '../utils/errorHandler';
import passport from 'passport';
import { crossCheckClientData } from '../utils/verifyClientData';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../interfaces/user';
import { ReplacerFunc } from '../utils/replacerFun';


const userServices = new UserService();


export class AuthController {
    public signin_google = passport.authenticate('google');

    public google_redirect = async function (req:Request, res:Response) {
            
            const FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL || 'http://localhost:3000';
            res.redirect(FRONTEND_BASE_URL);
          }

    async signup(req:Request, res:Response, next:NextFunction) {
       const requiredFilds = {
           firstname: 'firstname',
           lastname: 'lastname',
           displayname: 'displayname',
           address: 'address',
           email: 'email',
           password: 'password'
       }
       const userData = crossCheckClientData<CreateUserDto>(req.body, requiredFilds);
       if (userData instanceof CustomError) return next(userData);
    
       try {
    
          const newUser = await userServices.create(userData)
       
           const expTimeFrame = process.env.NODE_ENV === 'development' ? "60d" : "1h";
           if (!process.env.JWT_SECRET) return next(new CustomError('secret_key needed', 400));
           const token = jwt.sign({...newUser, password: null}, process.env.JWT_SECRET, {expiresIn: expTimeFrame});

           const createdUser = ReplacerFunc({...newUser});
       
           res.setHeader('Authorization', `Bearer ${token}`);
           res.status(201).json({
               msg: 'account created successfully. Please check your email to verify your account.', 
               data: createdUser
           });
       } catch (error:any) {
           if (process.env.NODE_ENV === 'production' && error.message.includes('Invalid `db.patron.create()`')) {
               return next(new CustomError('faild to create account please try again', 500));
           }
           next(new CustomError(error.message, 500));
       }
    }
    
    
    async signin(req:Request, res:Response, next:NextFunction) {
       const userData = crossCheckClientData<User>(req.body, {email: 'email', password: 'password'});
       if (userData instanceof CustomError) return next(userData);
    
       try {
           const user = await getUserData(userData);
           
           if(user instanceof CustomError) return next(user);
           
           const expTimeFrame = process.env.NODE_ENV === 'dev' ? "60d" : "1h";
           if (!process.env.JWT_SECRET) return next(new CustomError('secret_key needed', 403));
           const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: expTimeFrame});

           console.log(token)//DEVELOPMENT
       
           const data = ReplacerFunc(user);
           
           res.setHeader("Authorization", `Bearer ${token}`);
           res.status(200).json({msg: 'Signed in', data});
       } catch (error:any) {
           next(new CustomError(error.message, 500))
       }
    }
    
    async signout(req:Request, res:Response, next:NextFunction) {
       req.logout((err) => {
           if (err) return res.status(500).send('Failed to log out');
           res.redirect('/'); 
         });
    }

    async verifyEmail(req:Request, res:Response, next:NextFunction) {
                const {email, token} = req.query;
        
                if (!email || token === 'undefined') {
                    res.status(400).json({ status: 'fail', msg: 'User ID is required' });
                }
        
                try {
                    await userServices.verifyEmail((email as string), (token as string))
                    if (!userServices.verifyEmail) next(new CustomError('Invalid or expired verification token', 400));
                    res.redirect(`${process.env.FRONTEND_BASE_URL || 'http://127.0.0.1:3000'}/verify-email?status=success&email=${encodeURIComponent(email as string)}`);
                } catch (error) {
                    next(new CustomError((error as Error).message, 500));
                }
    }

}

