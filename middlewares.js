import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });


export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Happy Tube";
    res.locals.routes = routes;
    next();
}


export const uploadVideo = multerVideo.single("videoFile");