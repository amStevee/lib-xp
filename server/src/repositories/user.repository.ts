import db from "../config/prismaClient";
import * as bcrypt from 'bcrypt';
import { CustomError } from "../utils/errorHandler";
import { Patron } from "@prisma/client";
import { UserRepositoryInt } from "../interfaces/user";
import { randomBytes } from "crypto";
import { eventEmitter } from "../events/event-emitter";
import { setupEmailListeners } from "../services/verifyEmail.services";
import { logger } from "../logger";


export class UserRepository implements UserRepositoryInt {
    async create(
        firstname: string,
        lastname: string,
        displayname: string,
        address: string,
        email: string,
        password: string
    ):Promise<Patron>{
        
        // \
        try {
            const isUser = await db.patron.findUnique({where: {email: email}});
        if (isUser) throw new CustomError('user already exist', 403);

        const verificationToken = randomBytes(32).toString('hex');

        // save verification token
        await db.emailVerificationToken.deleteMany({ where: { email } });
        await db.emailVerificationToken.create({
            data: {
                email,
                token: verificationToken,
                expiresAt: new Date(Date.now() + 1 * 60 * 60 * 10000 ),
            }
        })

        // 
        if(!password) throw new CustomError('password required', 403);
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        
        const newUser = await db.patron.create({data: {
            email,
            firstname,
            lastname,
            address,
            displayname,
            password: hash
        }})

        // listen for email events.
        // this is used to send email to the user.
        setupEmailListeners()

        // send serification email.
        eventEmitter.emit('user:created', {...newUser, displayname: newUser.displayname || undefined, verificationToken})
        // //

        return newUser

        } catch (error) {
            throw new CustomError((error as string), 409)
        }
    }

    async verifyEmail(email:string, token:string) {
    
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

        logger.info(`User email verified: ${email}`);
        return db.patron.findUnique({
            where: {email},
            select: {
                isEmailVerified: true
            }
        });

    }

    async findAll() {
        return db.patron.findMany()
    }

    async findOne(id:string) {
        // **make the book_consulted and book_likes optional by getting the data from the request ?query**
        return db.patron.findUnique({
            where: {id}, 
            include: {
                book_consulted: true, 
                book_likes: true
            }
        })
    }

    async delete(id:string) {
        return db.patron.delete({where: {id}})
    }
}