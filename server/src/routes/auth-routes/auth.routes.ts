import express from 'express';
import { signin, signin_google, signout } from '../../controllers/user/auth.controller';

const router = express.Router();

router.route('/signin').post(signin);
router.route('/google').post(signin_google);
router.route('/google/redirect').post(signin_google);
router.route('/signout').post(signout);


export default router;