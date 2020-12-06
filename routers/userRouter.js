import express from "express";
import routes from "../routes";
import { editProfile } from "../controllers/userController";

const router = express.Router();

router.use(routes.editProfile, editProfile);

export default router;