import express from "express";
import { videoHome, search } from "../controllers/videoController";
import routes from "../routes";
const router = express.Router();


router.get(routes.home, videoHome);
router.get(routes.search, search);

export default router;