import { CustomError } from "../utils/errorHandler";
import { sendVerificationEmail } from "../services/verifyEmail.services";
import { eventEmitter } from "../events/event-emitter";
import { emailTemplate } from "../templates/email.template";
import { delayExecution, exponentialBackoff, isRetryableError } from "../utils/retryUtils";
import { verifyEmail } from '../repositories/verifyEmail.repository';
import { User } from "../entities/User";
import type { NextFunction, Request, Response } from "express";


const MAX_RETRIES = 5;
const INITIAL_DELAY_MS = 1000;
const JITTER_FACTOR = 0.2;

interface UserEvent extends User {
    verificationToken: string
}

/* ISSUES: 
    ~ Client cannot request for new verification token 
*/
export class VerifyEmail {

    async verifyUserMail (req:Request, res:Response, next:NextFunction) {
        const {email, token} = req.query;

        if (!email || token === 'undefined') {
            res.status(400).json({ status: 'fail', msg: 'User ID is required' });
        }

        try {
            await verifyEmail((email as string), (token as string))
            res.redirect(`${process.env.FRONTEND_BASE_URL || 'http://127.0.0.1:3000'}/verify-email?status=success&email=${encodeURIComponent(email as string)}`);
        } catch (error) {
            next(new CustomError((error as Error).message, 500));
        }
    }

     setupEmailListeners() {
        eventEmitter.on('user:created', async function (user) {
            try {
                await VerifyEmail.retryableSendWelcomeEmail(user);
                console.log(`Email sent to ${user.email}`);
            } catch (error) {
                console.error(`Email failed after ${MAX_RETRIES} atempt for ${user.email}`, error);
            }
        });
    }
    
    static async retryableSendWelcomeEmail(user:UserEvent) {
    
        for(let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    
            try {
    
                if (!user.email) throw new CustomError('email required', 400) 
                // MOVE LATER
                const verificationLink = `${process.env.API_URL}/user/verify-email?token=${user.verificationToken}&email=${encodeURIComponent(user.email)}`;
    
                return await sendVerificationEmail({to: user.email, subject: 'Verify Your Libxp Email', body: emailTemplate(verificationLink)});
    
            } catch (error) {
                if (!isRetryableError(error) || attempt === MAX_RETRIES) {
                    throw new CustomError((error as Error).message, 500)
                }
    
                const delay = exponentialBackoff(attempt, INITIAL_DELAY_MS, JITTER_FACTOR);
                console.log(`Email failed (attempt ${attempt}) for ${user.email}. Retrying in ${delay}ms`, error);
    
                await delayExecution(delay);
            }
        }
    }
}
