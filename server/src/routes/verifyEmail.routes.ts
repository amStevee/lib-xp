import express from 'express';
import { VerifyEmail } from '../controllers/verifyEmail.controller';


const verifyEmailRouter = express.Router();
const verifyEmailInstance = new VerifyEmail()

verifyEmailRouter.get('/verify-email', verifyEmailInstance.verifyUserMail)

export default verifyEmailRouter