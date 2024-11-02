import { User } from "../types";
import { CustomError } from "./errorHandler";

export function crossCheckClientData(reqBody:User, required = {}) {

    if (!Object.keys(reqBody).length) 
        return new CustomError(`must provied data to request body`, 400);

    let emptyFildArray = [];
    // Check for falsy data in filds.
    for (const key in reqBody) {
        if (!reqBody[key as keyof User] || reqBody[key as keyof User] === undefined) emptyFildArray.push(key);
    }
    //  Check to make sure required filds are present.
    for (const key in required) {
        if (!reqBody[key as keyof typeof required]) emptyFildArray.push(key);
    }
    
    if (emptyFildArray.length) return new CustomError(`must provied ${emptyFildArray.toString()}`, 400);


    return ({...reqBody} as Required<User>)
}