import express from "express";
import routes from "../routes";
import { editProfile, join, login } from "../controllers/userController";

const router = express.Router();

router.use(routes.editProfile, editProfile);
router.use(routes.login, login);
router.use(routes.join, join);

export default router;