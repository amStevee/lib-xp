import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";
import { FRONTEND_BASE_URL } from "../config/constants";
import jwt from "jsonwebtoken";

export function verifyUser(req:Request, res:Response, next:NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
          if (err) {
            return next(err);
          }
          req.user = user;
          next();
        });}else if(req.user) {
            next()
        }else {
            res.redirect(`${FRONTEND_BASE_URL}/signin`)
            next(new CustomError('You need to be signed in first', 403));
        }
}
