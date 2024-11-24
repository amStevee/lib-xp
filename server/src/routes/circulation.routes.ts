import { Router } from "express";
import { getPendingCheckin, notifyDueDate } from "../controllers/circulation.controller";
import { verifyUser } from "../middleware/verifyUser";

const router = Router();

router.route('/').get(getPendingCheckin); // verifyUser, 
router.route('/due-date').get(verifyUser, notifyDueDate);

export default router;