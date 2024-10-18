import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
import {CreateError} from "../types";
dotenv.config();

export const routeNotFound = async(req:Request, res:Response, next: NextFunction) => {
    const err = new CustomError(`route for ${req.originalUrl} not found`, 404)
    next(err)
}

export class CustomError extends Error {
   constructor(public message:string, public statusCode:number) {
        super(message)
    
        Error.captureStackTrace(this, this.constructor)
    }
}

export const globalErrorHandler = async function (error:CreateError, req:Request, res:Response, next:NextFunction) {
    error.statusCode = error.statusCode || 500;
    error.status = error.statusCode >= 400 && error.statusCode < 500 ? 'fail' : 'error';
    process.env.NODE_ENV == 'production'
    ? res.status(error.statusCode).json({msg: 'server error'}) 
    : res.status(error.statusCode).json({
        status: error.status,
        type: error.name,
        msg: error.message,
        stack: error.stack
    })
}