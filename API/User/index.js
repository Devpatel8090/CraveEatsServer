// Libraries
import express from "express";

// import database model
import { UserModel } from "../../database/allModelsIndex";

const Router = express.Router();

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
        if (!getUser) {
            return res.status(404).json({ error: "User NOt found" });
        }

        return res.status(200).json({ user: getUser });
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