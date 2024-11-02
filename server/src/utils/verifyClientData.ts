import { User } from "../types";

export function VerifyClientData(reqBody:User) {
    // ***Needs to check for required filed as easch route requirement are uniuqe to them ***
    if (!Object.keys(reqBody).length) 
        return `must provied data to request body`;

    let nullData = [];
    for (const key in reqBody) {
        if (!reqBody[key as keyof User] || reqBody[key as keyof User] === undefined) nullData.push(key);
    }
    
    if (nullData.length) return `must provied ${nullData.toString()}`;


    return ({...reqBody} as Required<User>)
}