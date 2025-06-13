import db from "../config/prismaClient"
import { CustomError } from "../utils/errorHandler";

export async function verifyEmail(email:string, token:string) {
    
    const verificationRecord = await db.emailVerificationToken.findUnique({
        where: { email, token }
    });

    if (!verificationRecord) throw new CustomError('Invalid or expired verification token', 400);

    if (verificationRecord.expiresAt < new Date()) {
        await db.emailVerificationToken.delete({where: {email, token}})
        throw new CustomError('Token has expired', 400);
    }

    await db.patron.update({
        where: {email: verificationRecord.email},
        data: {isEmailVerified: true}
    })

    await db.emailVerificationToken.delete({where: {email, token}});

    console.log('User email verified')

}