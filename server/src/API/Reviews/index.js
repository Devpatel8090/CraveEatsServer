// Libraries
import express from "express";
import passport from "passport";

// import database model
import { ReviewModel } from "../../database/allModelsIndex";

const Router = express.Router();

/**
 * Route        /:resid
 * des          Get all review for a particular restaurant
 * Params       resid
 * Access       public
 * Method       Get
 */

Router.get("/:resid", async (req, res) => {
    try {
        const { resid } = req.params;
        const Reviews = await ReviewModel.find({ restaurant: resid }).populate("user", "fullName").populate("food", "name");
        console.log(Reviews);
        return res.status(200).json({ Reviews: Reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route        /new
 * des          addding new food/restaurant REviews or rating
 * Params       none
 * Access       private
 * Method       Post
 */

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;
        const { reviewData } = req.body;
        const Reviews = await ReviewModel.create({ ...reviewData, user: _id });

        return res.status(200).json({ Reviews: "Successfully created review" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route        /delete/:id
 * des          Delete a specific review
 * Params       _id
 * Access       public
 * Method       delete
 */

Router.delete("/delete/:id", async (req, res) => {
    try {
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Successfully deleted the review" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});





export default Router;