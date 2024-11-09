import { NextFunction, Request, Response } from "express";
import db from "../config/db";
import { CustomError } from "../utils/errorHandler";
import { User } from "../types";


export default async function(req:Request, res:Response, next:NextFunction) {

    try {
        const user = await db.patron.findUnique({where: {id: (req.user as User).id}});
        if (!user) return next(new CustomError('user not found', 404))

        if (user.borrowed_books.length > 3) return next(new CustomError('you have riched your borrow limit', 403));

        next()
    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}