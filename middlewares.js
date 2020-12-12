import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localsMiddleware = (req, res, next) => {

    res.locals.siteName = "Happy Tube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
}

export const onlyUser = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
}

export const onlyNonUser = (req, res, next) => {
    if (!req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
}



export const uploadVideo = multerVideo.single("videoFile");

export const uploadAvatar = multerAvatar.single("avatar");