import {SES} from 'aws-sdk';
import dotenv from 'dotenv';
import { CustomError } from '../utils/errorHandler';

dotenv.config();

const ses = new SES({region: process.env.AWS_REGION || 'eu-north-1'});

interface SendEmailParams {
    to:string;
    subject:string;
    body:string;
}


if (typeof process.env.SES_EMAIL_SOURCE == 'undefined') {
  throw new CustomError('email source not found', 404)
}

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
        return 'Verification email sent'
    } catch (error:any) {
        console.error("Error sending email:", error);
        throw new CustomError('Failed to send email', 500);
    }
};
