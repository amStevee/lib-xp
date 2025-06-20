import express from 'express';
import passport from 'passport';
import { AuthController } from '../controllers/auth.controller';

const authController = new AuthController();
const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/signin').post(authController.signin);
router.route('/google').get(authController.signin_google);
router.route('/redirect/google').get(passport.authenticate('google'), authController.google_redirect);
router.route('/signout').get(authController.signout);
router.route('/user/verify-email').get(authController.verifyEmail);



export default router;