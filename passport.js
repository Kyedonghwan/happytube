import passport from "passport";
import User from "./models/User";
import googleOauth from "passport-google-oauth20";
import { googleCallback } from "./controllers/userController";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const googleStrategy = googleOauth.Strategy;


passport.use(User.createStrategy());

passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_AUTH_ID,
    clientSecret: process.env.GOOGLE_AUTH_PW,
    callbackURL: `http://localhost:4000${routes.googleCallback}`
},
    googleCallback
));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
