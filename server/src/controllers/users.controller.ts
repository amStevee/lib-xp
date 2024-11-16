import { NextFunction, Request, Response } from "express";
import db from "../config/prismaClient";
import { CustomError } from "../utils/errorHandler";
import { User } from "../entities/User";

export async function getAllusers(req:Request, res:Response, next:NextFunction) {
    try {
        const data = await db.patron.findMany();
        res.status(200).json({msg: 'success', data})
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
}

export async function getuser(req:Request, res:Response, next:NextFunction) {
    const patron_id = (req.user as User).id;
    if (!patron_id) return next(new CustomError('unauthorize', 403));

    try {
        const data = await db.patron.findUnique({
            where: {id: patron_id}, 
            include: {
                book_consulted: {where: {patron_id}}, 
                book_likes: {where: {patron_id}}
            }
        });
        res.status(200).json({msg: 'success', data})
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
}

export async function deleteUser(req:Request, res:Response, next:NextFunction) {
    const patron_id = (req.user as User).id;
    if (!patron_id) return next(new CustomError('unauthorize', 403));
    try {
        const data = await db.patron.delete({where: {id: patron_id}});
        res.status(200).json({msg: 'success', data})
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
}
