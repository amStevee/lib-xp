import {Router} from 'express';
import { deleteAllUsers, getAllusers } from '../controllers/users.controller';

const router = Router();

router.route('/').get(getAllusers);
router.route('/').delete(deleteAllUsers);

export default router;

