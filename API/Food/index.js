// libraries
import express from "express";


// Modals
import { FoodModel } from "../../database/allModelsIndex";

// Validation
import { ValidateCategory, ValidateId } from "../../Validation/common.validation";
const Router = express.Router();

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
 * Route           /c/:_categoru 
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