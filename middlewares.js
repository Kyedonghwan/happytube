import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "videos/" });


export const localsMiddleware = (req, res, next) => {
    console.log(req.user);
    res.locals.siteName = "Happy Tube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
}


export const uploadVideo = multerVideo.single("videoFile");