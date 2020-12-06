import express from "express";
import routes from "../routes";
import { uploadVideo } from "../controllers/videoController";

const router = express.Router();

router.use(routes.upload, uploadVideo);

export default router;