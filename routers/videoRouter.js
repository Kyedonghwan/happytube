import express from "express";
import routes from "../routes";
import { uploadVideo, videoDetail, editVideo } from "../controllers/videoController";

const router = express.Router();

router.get(routes.upload, uploadVideo);
router.get(routes.editVideo(), editVideo);
router.get(routes.videoDetail(), videoDetail);

export default router;