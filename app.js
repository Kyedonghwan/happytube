import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";
import passport from "passport";
import mongoose from "mongoose";
import mongoStore from "connect-mongo";
import dotenv from "dotenv";

import "./passport";

dotenv.config();
const app = express();

const cookieStore = mongoStore(session);

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug"); // view engine이 보여질 확장자가 pug임을 명시.
app.set("views", path.join(__dirname, "views"));
app.use("/uploads", express.static("uploads/"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new cookieStore({ mongooseConnection: mongoose.connection })
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;
