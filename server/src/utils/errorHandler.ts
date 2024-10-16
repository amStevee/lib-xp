import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

export class CustomError extends Error {
   constructor(public message:string, public statusCode:number) {
        super(message)
        status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor)
    }
}

export const globalErrorHandler = async function (error:CreateError, req:Request, res:Response, next:NextFunction) {
    error.statusCode = error.statusCode || 500;
    process.env.NODE_ENV == 'production'
    ? res.status(error.statusCode).json({msg: 'server error'}) 
    : res.status(500).json({
        status: error.status,
        msg: error.message,
        stack: error.stack,
        cause: error.cause
    })
}