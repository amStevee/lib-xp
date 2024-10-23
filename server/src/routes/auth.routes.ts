import express from 'express';
import { google_redirect, signin, signin_google, signout } from '../controllers/auth/auth.controller';
import passport from 'passport';
import { verifyUser } from '../middleware/verifyUser';

const router = express.Router();

router.route('/signin').post(signin);
router.route('/google').get(signin_google);
router.route('/redirect/google').get(passport.authenticate('google'), google_redirect);
router.route('/signout').get(signout);



export default router;