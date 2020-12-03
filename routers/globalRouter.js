import express from "express";
import { videoHome } from "../controllers/videoController";
import routes from "../routes";
const router = express.Router();


router.use(routes.home, videoHome);

export default router;