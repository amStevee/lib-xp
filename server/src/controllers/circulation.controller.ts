import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errorHandler";
import { CriculationService } from "../services/circulation.service";


const criculationService = new CriculationService();

export class CirculationController {
    async getPendingCheckin(req:Request, res:Response, next:NextFunction) {
        try {
            const pendingCheckout = await criculationService.findPendingCheckout();
            res.status(200).json({msg: 'success', data: pendingCheckout})
        } catch (error:any) {
            next(new CustomError(error.message, 500));
        }
    }

    async borrowedBooks(req:Request, res:Response, next:NextFunction) {
        try {
            const borrowedBooksArr = await criculationService.findAllBorrowedBooks();
            res.status(200).json({mag: 'success', data: borrowedBooksArr});
        } catch (error:any) {
            next(new CustomError(error.message, 500));
        }
    }

    async checkout(req:Request, res:Response, next:NextFunction) {
        const {book_id, patron_id} = req.params;
        if (!book_id || !patron_id) return next(new CustomError('book_id not found', 404));
        try {
            const isCheckedOut = await criculationService.checkout(book_id, patron_id);
            if(!isCheckedOut) return next(new CustomError('faild to checkout', 500));
            res.status(200).json({msg: 'success'})
        } catch (error:any) {
            next(new CustomError(error.message, 500));
        }
    }
    
    async checkin(req:Request, res:Response, next:NextFunction) {
        const patron_id = req.user as string;
        const {book_id} = req.params;
        const date_due = new Date(Date.now() + 7);
    
        try {
            if (!book_id || !patron_id) return next(new CustomError('book_id not found', 404));
            const checkinBook = await criculationService.checkin(book_id,patron_id,date_due);
    
            if (!checkinBook) {
                return next(new CustomError('faild to checkin book', 400));
            }
    
            res.status(200).json({msg: 'success', data: checkinBook});
    
        } catch (error:any) {
            next(new CustomError(error.message, 500));
        }
    }
    
    
    async notifyDueDate(req:Request, res:Response, next:NextFunction) {
        try {
            const closeDueDate = await criculationService.findCloseDueDate();
            let userArr:Object[] = [];
            closeDueDate.map((bkd: any) => {
                const today = Date.now();
                const dueDate = new Date(bkd.date_due).getDate();
                // continue this logic
            })
            res.status(200).json({msg: 'success', data: userArr})
    
        } catch (error:any) {
            next(new CustomError(error.message, 500))
        }
    }
}