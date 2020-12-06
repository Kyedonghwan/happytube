import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";


const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug"); // view engine이 보여질 확장자가 pug임을 명시.
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);
app.use(routes.users, userRouter);
app.use(routes.home, globalRouter);



export default app;
