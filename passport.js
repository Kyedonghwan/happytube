import passport from "passport";
import User from "./models/User";
import googleOauth from "passport-google-oauth20";
import naverOauth from "passport-naver";
import { googleCallback, naverCallback } from "./controllers/userController";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const googleStrategy = googleOauth.Strategy;
const naverStrategy = naverOauth.Strategy;

passport.use(User.createStrategy());

passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_AUTH_ID,
    clientSecret: process.env.GOOGLE_AUTH_PW,
    callbackURL: `http://localhost:4000${routes.googleCallback}`
},
    googleCallback
));


passport.use(new naverStrategy({
    clientID: process.env.NAVER_AUTH_ID,
    clientSecret: process.env.NAVER_AUTH_PW,
    callbackURL: `http://localhost:4000${routes.naverCallback}`
},
    naverCallback
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
