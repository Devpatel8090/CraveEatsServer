// Libraries
import express from "express";
import passport from "passport";
// import database model
import { UserModel } from "../../database/allModelsIndex";

const Router = express.Router();


/**
 * Route        /
 * Des          GET authorized user data
 * Params       none
 * Access       Public
 * Method       GET
 */
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { email, fullName, phoneNumber, address } =
            req.session.passport.user._doc;

        return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route        /:_id
 * Des          Get the user Data
 * params       _id
 * Access       public
 * method       Get
 */

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);
        const { user } = getUser;
        if (!getUser) {
            return res.status(404).json({ error: "User NOt found" });
        }
        return res.status(200).json({ user: user });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route        /update
 * Des          update the user Data
 * params       _id
 * Access       public
 * method       put
 */

Router.put("/update/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,
            {
                $set: userData
            },
            {
                new: true
            }
        )

        return res.status(200).json({ user: updateUserData })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});









export default Router;