import db from "../config/prismaClient";
import * as bcrypt from 'bcrypt';
import { CustomError } from "../utils/errorHandler";
import { Patron } from "@prisma/client";
import { UserRepositoryInt } from "../interfaces/User.interface";

export class UserRepository implements UserRepositoryInt {
    async create(
        firstname: string,
        lastname: string,
        displayname: string,
        address: string,
        email: string,
        password: string
    ):Promise<Patron>{
        // Check if user alredy exist
        const isUser = await db.patron.findUnique({where: {email: email}});
        if (isUser) throw new CustomError('user already exist', 403);

        // Verify user email before proceeding.
        // 
        // 
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