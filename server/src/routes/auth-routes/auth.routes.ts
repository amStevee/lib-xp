import express from 'express';
import { signin, signin_google, signout } from '../../controllers/user/auth.controller';
import passport from 'passport';

const router = express.Router();

router.route('/signin').post(signin);
router.route('/google').get(passport.authenticate('google'));
router.route('/redirect/google').get(signin_google);
router.route('/signout').get(signout);


export default router;