import { Request } from "express";

export interface CreateError extends Error {
    statusCode:number,
    status: string
}

// export interface User {
//   id?: string;
//   google_Id?: string; //unique
//   firstname?: string;
//   lastname?: string;
//   displayname?: string;
//   address?: string;
//   contact?: string; //unique
//   email: string; //unique
//   password?: string;
//   profile_img?: string;
// }

export interface CustomRequest extends Request {
  user: Record<string, any>
}