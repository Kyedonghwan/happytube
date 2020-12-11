import express from "express";
import routes from "../routes";
import { getUploadVideo, postUploadVideo, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";
import { uploadVideo, onlyUser, onlyNonUser } from "../middlewares";

const router = express.Router();

router.get(routes.upload, onlyUser, getUploadVideo);
router.post(routes.upload, onlyUser, uploadVideo, postUploadVideo);
router.get(routes.editVideo(), onlyUser, editVideo);
router.get(routes.videoDetail(), videoDetail);
router.get(routes.deleteVideo(), onlyUser, deleteVideo);

export default router;