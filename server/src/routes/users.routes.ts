import {Router} from 'express';
import { deleteUser, getAllusers, getuser } from '../controllers/users.controller';
import { verifyUser } from '../middleware/verifyUser';

const router = Router();

router.route('/').get(getAllusers);
router.route('/user').get(verifyUser, getuser);
router.route('/').delete(verifyUser, deleteUser);

export default router;

