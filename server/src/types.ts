import { Request } from "express";

export interface CreateError extends Error {
    statusCode:number,
    status: string
}

export interface UserData {
  Google_Id?: string; //unique
  firstname?: string;
  lastname?: string;
  address?: string;
  contact?: string; //unique
  uemail: string; //unique
  rank?: number;
  password?: string
}

export interface CustomRequest extends Request {
  user: Record<string, any>
}