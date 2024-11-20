import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";
import { User } from "../entities/User";
import { UserService } from "../services/user.service";

const userService = new UserService()

export class UserController {

    async getAllusers(req:Request, res:Response, next:NextFunction) {
       try {
           const data = await userService.findAll();
           res.status(200).json({msg: 'success', data})
       } catch (error: any) {
           next(new CustomError(error.message, 500));
       }
    }
    
    async getuser(req:Request, res:Response, next:NextFunction) {
       const patron_id = (req.user as User).id;
       if (!patron_id) return next(new CustomError('unauthorize', 403));
    
       try {
           const data = await userService.findOne(patron_id);
           res.status(200).json({msg: 'success', data})
       } catch (error: any) {
           next(new CustomError(error.message, 500));
       }
    }
    
    async deleteUser(req:Request, res:Response, next:NextFunction) {
       const patron_id = (req.user as User).id;
       if (!patron_id) return next(new CustomError('unauthorize', 403));
       try {
           const data = await userService.delete(patron_id);
           res.status(200).json({msg: 'success', data})
       } catch (error: any) {
           next(new CustomError(error.message, 500));
       }
    }
}

