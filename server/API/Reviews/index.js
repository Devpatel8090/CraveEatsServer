// Libraries
import express from "express";

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
        const Reviews = await ReviewModel.find({ restaurants: resid });

        return res.status(200).json({ Reviews: Reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route        /:resid
 * des          addding new food/restaurant REviews or rating
 * Params       none
 * Access       public
 * Method       Post
 */

Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body;
        const Reviews = await ReviewModel.create({ ...reviewData });

        return res.status(200).json({ Reviews: "Successfully created review" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route        /:resid
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