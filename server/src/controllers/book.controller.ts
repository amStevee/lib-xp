import { NextFunction, Request, Response } from "express";
import db from "../config/db";
import { CustomError } from "../utils/errorHandler";

export async function getAllBooks(req:Request, res:Response, next:NextFunction) {
    const {limit, page} = req.query;
    try {
        const queryLimit = Number(limit) || 10;
        const books = await db.book.findMany({skip: Number(page), take:queryLimit});

        res.json({msg: 'success', data: [...books]})
    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}