import express from "express";
import { videoHome, search } from "../controllers/videoController";
import { googleLogin, postGoogleLogin, naverLogin, postNaverLogin } from "../controllers/userController";
import routes from "../routes";
const router = express.Router();

const googleRedirect = (req, res) => {
    res.redirect(routes.home);
}

const naverRedirect = (req, res) => {
    res.redirect(routes.home);
}

router.get(routes.home, videoHome);
router.get(routes.search, search);

router.get(routes.google, googleLogin);
router.get(routes.googleCallback, postGoogleLogin, googleRedirect);

router.get(routes.naver, naverLogin);
router.get(routes.naverCallback, postNaverLogin, naverRedirect);

export default router;