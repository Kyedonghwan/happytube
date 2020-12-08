import express from "express";
import routes from "../routes";
import { getUploadVideo, postUploadVideo, videoDetail, editVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const router = express.Router();

router.get(routes.upload, getUploadVideo);
router.post(routes.upload, uploadVideo, postUploadVideo);
router.get(routes.editVideo(), editVideo);
router.get(routes.videoDetail(), videoDetail);


export default router;