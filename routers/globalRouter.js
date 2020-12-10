import express from "express";
import { videoHome, search } from "../controllers/videoController";
import { googleLogin, postGoogleLogin } from "../controllers/userController";
import routes from "../routes";
const router = express.Router();

const googleRedirect = (req, res) => {
    res.redirect(routes.home);
}

router.get(routes.home, videoHome);
router.get(routes.search, search);
router.get(routes.google, googleLogin);
router.get(routes.googleCallback, postGoogleLogin, googleRedirect);


export default router;