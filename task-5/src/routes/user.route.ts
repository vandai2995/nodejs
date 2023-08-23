import {
    Router
} from "express";
import { addUser, getUserByEmail, getUserUsingCache, login } from "../controller/user.controller";
import passport from "passport";
import { checkRole } from "../middleware/checkRole";
const router = Router();


router.post('/login', passport.authenticate('local', { session: true }), login);
router.post('/add', addUser)
router.get('/', getUserByEmail);
router.get('/cached-user', getUserUsingCache)

export default router;