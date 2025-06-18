// Libraray
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from '../../database/allModelsIndex';

// Validation
import { ValidateSignin, ValidateSignup } from "../../Validation/auth.validation";


// create a router

const Router = express.Router();

/**
 * Router       /signup
 * Des          Register new user
 * Params       none
 * Access       Public
 * Method       Post
 */

Router.post("/signup", async (req, res) => {
    try {
        await ValidateSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        // Save the data to the database
        const newUser = await UserModel.create(req.body.credentials);

        const token = newUser.generateJwtToken();
        // generate the JWT auth token  (for authorizing the user Jsonwebtoken)
        console.log(token);
        return res.status(200).json({ token: token, status: "success" });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        console.log(user);
        const token = user.generateJwtToken();
        console.log(token);
        return res.status(200).json({ token: token, status: "success" });

    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

/**
 * Router       /google
 * Des          Google Signin
 * Params       none
 * Access       public
 * Method       Get
 */

Router.get("/google", passport.authenticate("google", {
    // scope is that whatever you want to get from the google account of user
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",

    ],

}));

/**
 * Router       /google/callback
 * Des          Google Signin callback
 * Params       none
 * Access       public
 * Method       Get
 */

Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        return res.redirect(`https://craveeats-server-a514484aed4c.herokuapp.com/google/${req.session.passport.user.token}`);
    }
)


export default Router;