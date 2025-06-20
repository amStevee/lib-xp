
import { eventEmitter } from "../events/event-emitter";
import { emailTemplate } from "../templates/email.template";
import { delayExecution, exponentialBackoff, isRetryableError } from "../utils/retryUtils";
import { User } from "../entities/User";
import { logger } from "../logger";
import {SES} from 'aws-sdk';
import dotenv from 'dotenv';
import { CustomError } from '../utils/errorHandler';

dotenv.config();



const ses = new SES({region: process.env.AWS_REGION || ''});

interface SendEmailParams {
    to:string;
    subject:string;
    body:string;
}


if (typeof process.env.SES_EMAIL_SOURCE == 'undefined') {
  throw new CustomError('email source not found', 404)
}

const MAX_RETRIES = 5;
const INITIAL_DELAY_MS = 1000;
const JITTER_FACTOR = 0.2;


interface UserEvent extends User {
    verificationToken: string
}

/* ISSUES: 
    ~ Client cannot request for new verification token 
*/

export async function sendVerificationEmail({to, subject, body}: SendEmailParams) {
    const params = {
        Source: process.env.SES_EMAIL_SOURCE ?? '',
        Destination: {
          ToAddresses: [to],
        },
        Message: {
          Subject: { Data: subject },
          Body: {
            Html: { Data: body },
          },
        },
      };
    
    try {
        const result = await ses.sendEmail(params).promise();
        
        if(!result) throw new CustomError('Failed to send email', 500)
        return 'Verification email sent'
    } catch (error:any) {
        console.error("Error sending email:", error);
        throw new CustomError('Failed to send email', 500);
    }
};


export function setupEmailListeners() {
        eventEmitter.on('user:created', async function (user) {
            try {
                await retryableSendWelcomeEmail(user);
                logger.info(`Email sent to ${user.email}`);
            } catch (error) {
                logger.error(`Email failed after ${MAX_RETRIES} atempt for ${user.email}`, error); 
            }
        });
    }
    
export async function retryableSendWelcomeEmail(user:UserEvent) {
    
        for(let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    
            try {
    
                if (!user.email) throw new CustomError('email required', 400) 
                if (!user.verificationToken) throw new CustomError('verification token required', 400);
                const verificationLink = `${process.env.API_URL}/oauth2/user/verify-email?token=${user.verificationToken}&email=${encodeURIComponent(user.email)}`;
    
                return await sendVerificationEmail({to: user.email, subject: 'Verify Your Libxp Email', body: emailTemplate(verificationLink)});
    
            } catch (error) {
                if (!isRetryableError(error) || attempt === MAX_RETRIES) {
                    throw new CustomError((error as Error).message, 500)
                }
    
                const delay = exponentialBackoff(attempt, INITIAL_DELAY_MS, JITTER_FACTOR);
                logger.warning(`Email failed (attempt ${attempt}) for ${user.email}. Retrying in ${delay}ms`, error);
    
                await delayExecution(delay);
            }
        }
    }