// Libraries
import express from 'express';

// Database Model
import { MenuModel, ImageModel } from '../../database/allModelsIndex';

const Router = express.Router();


/**
 * Route           /list 
 * Des              Get all list menu based on restaurant
 * Params           _id
 * Access           Public
 * Method           GET
 */

Router.get('/list/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const menu = await MenuModel.findById(_id);

        if (!menu) {
            return res.status(404).json({ error: "No menu present for this restaurant" });
        }
        return res.json({ menu });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});




/**
 * Route           /list 
 * Des              Get all list menu based on restaurant
 * Params           _id
 * Access           Public
 * Method           GET
 */

Router.get('/image/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const menuImages = await ImageModel.findById(_id);

        if (!menuImages) {
            return res.status(404).json({ error: "No menuImages present for this restaurant" });
        }
        // TODO: Validate if the imaages are present or not, throw error if not present
        return res.json({ menuImages });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;

