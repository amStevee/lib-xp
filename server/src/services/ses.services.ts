import {SES} from 'aws-sdk';
import dotenv from 'dotenv';
import { CustomError } from '../utils/errorHandler';

dotenv.config();

const ses = new SES({region: 'us-east-1'});

interface SendEmailParams {
    to:string;
    subject:string;
    body:string;
}

export async function sendEmail({to, subject, body}: SendEmailParams) {
    const params = {
        Source: process.env.SES_EMAIL_SOURCE!,
        Destination: {
          ToAddresses: [to],
        },
        Message: {
          Subject: { Data: subject },
          Body: {
            Text: { Data: body },
          },
        },
      };
    
    try {
        const result = await ses.sendEmail(params).promise();
        console.log("Email sent:", result.MessageId);
    } catch (error:any) {
        console.error("Error sending email:", error);
        throw new CustomError('Failed to send email', 500);
    }
};
