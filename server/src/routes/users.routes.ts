import {Router} from 'express';

import { verifyUser } from '../middleware/verifyUser';
import { UserController } from '../controllers/users.controller';

const userController = new UserController()
const router = Router();

router.route('/').get(userController.getAllusers);
router.route('/user').get(verifyUser, userController.getuser);
router.route('/').delete(verifyUser, userController.deleteUser);

export default router;

