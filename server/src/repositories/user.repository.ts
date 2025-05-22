import db from "../config/prismaClient";
import * as bcrypt from 'bcrypt';
import { CustomError } from "../utils/errorHandler";
import { Patron } from "@prisma/client";
import { UserRepositoryInt } from "../interfaces/user";
import { sendVerificationEmail } from "../services/ses.services";
import { randomBytes } from "crypto";

export class UserRepository implements UserRepositoryInt {
    async create(
        firstname: string,
        lastname: string,
        displayname: string,
        address: string,
        email: string,
        password: string
    ):Promise<Patron>{
        const verificationToken = randomBytes(32).toString('hex');
        const verificationLink = `${process.env.API_URL}/verify?token=${verificationToken}&email=${encodeURIComponent(email)}`;
        const emailBody = `
            <html>
                <body>
                    <h1>Email verification</h1>
                    <p>Click <a href="${verificationLink}">here</a> to verify your email.</p>
                </body>
            </html>
        `
        // Check if user alredy exist
        try {
            const isUser = await db.patron.findUnique({where: {email: email}});
        if (isUser) throw new CustomError('user already exist', 403);

        // save verification token
        await db.emailVerificationToken.create({
            data: {
                email,
                token: verificationToken,
                expiresAt: new Date(Date.now() + 1 * 60 * 60 * 10000 ),
            }
        })

        // send serification email.
        await sendVerificationEmail({to: email, subject: 'verify email', body: emailBody});
        // //

        // Hash password
        if(!password) throw new CustomError('password required', 403);
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        
        return db.patron.create({data: {
            email,
            firstname,
            lastname,
            address,
            displayname,
            password: hash
        }})
        } catch (error) {
            throw new CustomError((error as string), 409)
        }
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