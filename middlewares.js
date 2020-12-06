
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Happy Tube";
    res.locals.routes = routes;
    next();
}