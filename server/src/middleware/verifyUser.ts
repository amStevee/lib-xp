import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";

export function verifyUser(req:Request, res:Response, next:NextFunction) {
    if (!req.user) return next(new CustomError('Forbiden', 403));
    next();
}