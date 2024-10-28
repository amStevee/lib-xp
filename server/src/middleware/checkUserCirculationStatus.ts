import { NextFunction, Request, Response } from "express";
import db from "../config/db";
import { CustomError } from "../utils/errorHandler";


export default async function(req:Request, res:Response, next:NextFunction) {

    try {
        const user = await db.patron.findUnique({where: {id: ''}});
        if (!user) return next(new CustomError('user not found', 404))

        if (user.borrowed_book.length > 3) return next(new CustomError('you have riched your borrow limit', 403));

        next()
    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}