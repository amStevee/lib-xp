import { Patron } from "@prisma/client";


export interface UserRepositoryInt {
    create(firstname: string,
        lastname: string,
        displayname: string,
        address: string,
        email: string,
        password: string): Promise<Patron>;
    findAll(): Promise<Patron[]>;
    findOne(id:string): Promise<({
        book_likes: {
            book_id: string;
            patron_id: string;
            liked_at: Date;
        }[];
        book_consulted: {
            book_id: string;
            patron_id: string;
            consulted_at: Date;
        }[];
    } & {
        id: string;
        google_Id: string | null;
        firstname: string;
        lastname: string;
        displayname: string | null;
        address: string | null;
        email: string;
        password: string | null;
        profile_img: string | null;
        borrowed_books: string[];
        created_at: Date;
        updated_at: Date;
    }) | null>;
    
    delete(id:string): Promise<Patron>;
}

export interface CreateUserDto {
    firstname: string,
    lastname: string,
    displayname: string,
    address: string,
    email: string,
    password: string
}

// export interface User {
//     id?: string;
//     google_Id?: string; //unique
//     firstname?: string;
//     lastname?: string;
//     displayname?: string;
//     address?: string;
//     contact?: string; //unique
//     email: string; //unique
//     password?: string;
//     profile_img?: string;
//   }