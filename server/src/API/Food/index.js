// libraries
import express from "express";


// Modals
import { FoodModel, ImageModel } from "../../database/allModelsIndex";

// Validation
import { ValidateCategory, ValidateId } from "../../Validation/common.validation";
const Router = express.Router();


/**
 * Route           /categories
 * Des              Get all distinct the food category
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/categories', async (req, res) => {
    try {
        const categories = await FoodModel.distinct("category");

        if (!categories || categories.length === 0) {
            return res.status(404).json({ error: "No categories found" });
        }
        const categoryData = await Promise.all(
            categories.map(async (cat) => {
                const food = await FoodModel.findOne({ category: cat }, "photos");
                const photoUrl = await ImageModel.findById(food.photos);
                console.log(photoUrl);
                return {
                    category: cat,
                    photo: food?.photos || null,
                    photoUrl: photoUrl?.images[0].Location || "https://aadhya-restaurant-bucket.s3.us-west-1.amazonaws.com/No+image+Availble.png",
                };
            })
        );

        return res.status(200).json({ categoryData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route        /:_id
 * Des          GET food based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.findById(_id);
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/**
 * Route           /r/:_id  
 * Des              Get all food based on particular restaurants
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/r/:_id', async (req, res) => {
    try {
        await ValidateId(req.params);
        const { _id } = req.params;
        const foods = await FoodModel.find()
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route           /c/:_category
 * Des              Get all food based on particular category
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/r/:category', async (req, res) => {
    try {
        await ValidateCategory(req.params);
        const { category } = req.params;
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" },

        });
        if (!foods) {
            return res.status(400).json({ error: `No food matched with ${category}` });
        }
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});






export default Router;