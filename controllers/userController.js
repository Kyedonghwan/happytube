import passport from "passport";
import User from "../models/User";
import routes from "../routes";

export const editProfile = (req, res) => {
    res.render("editProfile");
}

export const getJoin = (req, res) => {
    res.render("join");
}

export const postJoin = async (req, res, next) => {
    const {
        body: {
            email, name, password, password2
        }
    } = req;
    if (password != password2) {
        res.status(400);
        res.redirect(`/users${routes.join}`);
    } else {
        try {
            const user = await User({
                name, email
            }
            );
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
}

export const getLogin = (req, res) => {
    res.render("login");
}

export const postLogin = passport.authenticate("local", {
    successRedirect: routes.home,
    failureRedirect: `/users${routes.login}`
});

export const profile = (req, res) => {
    res.render("profile");
}

export const userDetail = (req, res) => {
    res.render("userDetail");
}

export const changePassword = (req, res) => {
    res.render("changePassword");
}