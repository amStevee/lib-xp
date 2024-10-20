import express from 'express';
import { google_redirect, signin, signin_google, signout } from '../../controllers/auth/auth.controller';

const router = express.Router();

router.route('/signin').post(signin);
router.route('/google').get(signin_google);
router.route('/redirect/google').get(google_redirect);
router.route('/signout').get(signout);



export default router;