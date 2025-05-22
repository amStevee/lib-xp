import express from 'express';
import { verifyEmail } from '../repositories/ses.repository';
import { CustomError } from '../utils/errorHandler';



const router = express.Router();

router.get('/verify-email', async (req, res) => {
    const {email, token} = req.query;

    if (!email || !token) return;

    try {
        const result = await verifyEmail(email as string, token as string);

        // Check if the verification was successful
        if (!result) throw new CustomError('Invalid or expired verification token', 400);

        res.redirect(`${process.env.CLIENT_URL}/verify-email?status=success`);
    } catch (error) {
        res.status(400).json({ error: error });
    }
})