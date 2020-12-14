import express from "express";
import routes from "../routes";
import { getEditProfile, postEditProfile, getJoin, postJoin, getLogin, postLogin, userDetail, getChangePassword, postChangePassword, logout } from "../controllers/userController";
import { uploadAvatar, onlyUser, onlyNonUser } from "../middlewares";
const router = express.Router();

router.get(routes.editProfile, onlyUser, getEditProfile);
router.post(routes.editProfile, onlyUser, uploadAvatar, postEditProfile);
router.get(routes.login, onlyNonUser, getLogin);
router.post(routes.login, onlyNonUser, postLogin);

router.get(routes.join, onlyNonUser, getJoin);
router.post(routes.join, onlyNonUser, postJoin, postLogin);
router.get(routes.logout, onlyUser, logout);


router.get(routes.changePassword, onlyUser, getChangePassword);
router.post(routes.changePassword, onlyUser, postChangePassword);
router.get(routes.userDetail(), userDetail);

export default router;