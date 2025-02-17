// Libraries
import express from "express";


// Database Modal
import RestaurantModel from "../../database/allModelsIndex";

// Validation
import { ValidateRestaurantSearchString, ValidateRestaurantCity } from "../../Validation/restaurant.validation";
import { ValidateId } from "../../Validation/common.validation";

const Router = express.Router();

/**
 * Route           /  
 * Des              Get all the restaurant details based on the city
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/', async (req, res) => {
    try {
        // http://Localhost:4000/restaurant/?city=ncr
        // destructuring
        await ValidateRestaurantCity(city)
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        if (restaurants.length === 0) {
            return res.json({ error: "No restaurants found in this city" });

        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/**
 * Route           /:_id  
 * Des              Get individual restaurant details based on id
 * Params           _id
 * Access           Public
 * Method           GET
 */

Router.get('/:_id', async (req, res) => {
    try {
        await ValidateId(_id);
        const { _id } = res.params;
        const restaurant = await RestaurantModel.findById(_id);
        if (!restaurant) {
            return res.status(400).json({ error: "Restaurant Not found" });
        }
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});



/**
 * Route           /search  
 * Des              Get restaurant details based on search string
 * Params           searchString
 * Access           Public
 * Method           GET
 */

Router.get('/search/:searchString', async (req, res) => {
    try {
        await ValidateRestaurantSearchString(searchString);
        const { searchString } = req.params;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        });

        if (!restaurants) {
            return res.status(404).json({ error: `No restaurant matched with ${searchString}` });
        }
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;