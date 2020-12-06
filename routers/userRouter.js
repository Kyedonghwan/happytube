import express from "express";
import routes from "../routes";
import { editProfile, join, login, userDetail } from "../controllers/userController";

const router = express.Router();

router.use(routes.editProfile, editProfile);
router.use(routes.login, login);
router.use(routes.join, join);
router.use(routes.userDetail(), userDetail);

export default router;