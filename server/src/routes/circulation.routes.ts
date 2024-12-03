import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser";
import { CirculationController } from "../controllers/circulation.controller";

const circulationController = new CirculationController();
const router = Router();

// use the app.use(verifyuser) when finished
router.route('/').get(verifyUser, circulationController.getPendingCheckin);
router.route('/due-date').get(verifyUser, circulationController.notifyDueDate);
router.route('/checkin').post(verifyUser, circulationController.checkin);
router.route('/checkout').get(verifyUser, circulationController.checkout);

export default router;