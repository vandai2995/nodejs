import {
    Router
} from "express";
import { addUser, login } from "../controller/user.controller";
import passport from "passport";
import { checkRole } from "../middleware/checkRole";
const router = Router();


router.post('/login', passport.authenticate('local', { session: true }), login);
router.post('/user', addUser)

router.get('/', passport.authenticate('jwt', { session: false }), checkRole(['member']), (req, res) => {
    res.send('Hello World! Authenticated');
});
export default router;