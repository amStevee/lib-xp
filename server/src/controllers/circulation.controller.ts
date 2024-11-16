import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";
import db from "../config/prismaClient";

export async function getPendingCheckin(req:Request, res:Response, next:NextFunction) {
    // refactor this code
    try {
        const circulationData = await db.circulation.findMany();
        const pendingCheckout = circulationData.map(async(crc) => {
            await db.patron.findMany({where: {
                id: {equals: crc.patron_id}
            }})
        })
        res.status(200).json({msg: 'success', data: pendingCheckout})
    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}


export async function notifyDueDate(req:Request, res:Response, next:NextFunction) {
    try {
        

    } catch (error:any) {
        next(new CustomError(error.message, 500))
    }
}