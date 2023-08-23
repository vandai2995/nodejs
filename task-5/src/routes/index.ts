import { Router } from "express";
import car from "./car.route";
import user from "./user.route";
export const router = Router();


router.use('/user', user);
router.use('/car', car);

export default router;