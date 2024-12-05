import { NextFunction, Request, Response } from 'express';
import getUserData from '../utils/getUserData';
import jwt from 'jsonwebtoken';
import { CustomError } from '../utils/errorHandler';
import passport from 'passport';
import { crossCheckClientData } from '../utils/verifyClientData';
import { User } from '../entities/User';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../interfaces/user';


const userServices = new UserService();

export class AuthController {
    public signin_google = passport.authenticate('google');

    public google_redirect = async function (req:Request, res:Response) {
            // res.redirect(FRONTEND_BASE_URL);
            res.redirect('/');
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
           // Verify user email before proceeding.
           // 
           // 
           // //
    
          const newUser = await userServices.create(userData)
       
           const expTimeFrame = process.env.NODE_ENV === 'development' ? "60d" : "1h";
           if (!process.env.JWT_SECRET) return next(new CustomError('secret_key needed', 400));
           const token = jwt.sign({...newUser, password: null}, process.env.JWT_SECRET, {expiresIn: expTimeFrame});
    
           // REMOVE 
           console.log(token)
       
           res.setHeader('Authorization', `Bearer ${token}`);
           res.status(201).json({
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
    
    
    async signin(req:Request, res:Response, next:NextFunction) {
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
    
    async signout(req:Request, res:Response, next:NextFunction) {
       req.logout((err) => {
           if (err) {
             return res.status(500).send('Failed to log out');
           }
           res.redirect('/'); 
         });
    }

}

