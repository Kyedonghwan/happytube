import express from "express";
import routes from "../routes";
import { editProfile, getJoin, postJoin, getLogin, postLogin, userDetail, changePassword, logout } from "../controllers/userController";

const router = express.Router();

router.get(routes.editProfile, editProfile);
router.get(routes.login, getLogin);
router.post(routes.login, postLogin);

router.get(routes.join, getJoin);
router.post(routes.join, postJoin, postLogin);
router.get(routes.logout, logout);


router.get(routes.changePassword, changePassword);
router.get(routes.userDetail(), userDetail);

export default router;