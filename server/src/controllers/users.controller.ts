import { NextFunction, Request, Response } from "express";
import db from "../config/db";
import { CustomError } from "../utils/errorHandler";

export async function getAllusers(req:Request, res:Response, next:NextFunction) {
    try {
        const data = await db.patron.findMany();
        res.status(200).json({msg: 'success', data})
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
}

export async function deleteAllUsers(req:Request, res:Response, next:NextFunction) {
    try {
        const data = await db.patron.deleteMany();
        res.status(200).json({msg: 'success', data})
    } catch (error: any) {
        next(new CustomError(error.message, 500));
    }
}
