import {
    Router
} from "express";
import { addCar, getCars } from "../controller/car.controller";
import { checkRole } from "../middleware/checkRole";
const router = Router();


router.post('/car', addCar)
router.get('/', checkRole(['member']), getCars);

export default router;