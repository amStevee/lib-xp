import { Router } from "express";
import { checkin, getPendingCheckin, notifyDueDate } from "../controllers/circulation.controller";
import { verifyUser } from "../middleware/verifyUser";

const router = Router();

router.route('/').get(getPendingCheckin);
router.route('/due-date').get(notifyDueDate);
router.route('/checkin').post(checkin);

export default router;