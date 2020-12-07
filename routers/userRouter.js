import express from "express";
import routes from "../routes";
import { editProfile, join, login, userDetail, changePassword } from "../controllers/userController";

const router = express.Router();

router.get(routes.editProfile, editProfile);
router.get(routes.login, login);
router.get(routes.join, join);
router.get(routes.changePassword, changePassword);
router.get(routes.userDetail(), userDetail);

export default router;