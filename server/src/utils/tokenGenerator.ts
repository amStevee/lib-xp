import {randomBytes} from 'crypto';

export function generateToken():string {
    return randomBytes(20).toString('hex');
}