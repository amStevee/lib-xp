import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";
import { CriculationService } from "../services/circulation.service";


const criculationService = new CriculationService();

export async function getPendingCheckin(req:Request, res:Response, next:NextFunction) {
    try {
        const pendingCheckout = await criculationService.findPendingCheckout();
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