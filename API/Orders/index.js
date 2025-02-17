// Libraries
import express from "express";
import passport from "passport";
// import database model
import { OrderModel } from "../../database/order/orderModel";

// Validate user
import ValidateUser from "../../config/validateUser.config";

const Router = express.Router();

/**
 * Route        /
 * Des          Get all the orders based on id
 * params       _id
 * Access       private
 * method       Get
 */

Router.get("/:_id", passport.authenticate("jwt"), ValidateUser, async (req, res) => {
    try {
        // await ValidateUser(req, res);
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });

        if (!getOrders) {
            return res.status(400).json({ error: "Order Is not found" });
        }

        return res.status(200).json({ orders: getOrders });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});


/**
 * Route        /new
 * Des          add new order
 * params       _id
 * Access       public
 * method       Post or put
 */

Router.post("/new/:_id", passport.authenticate("jwt"), ValidateUser, async (req, res) => {
    try {
        // await ValidateUser(req, res);
        const { _id } = req.params;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id,
            },
            {
                $push: {
                    orderDetails: orderDetails
                }
            },
            {
                new: true           // I want recent Updated data by default it is false
            }
        );

        return res.status(200).json({ orders: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

export default Router;