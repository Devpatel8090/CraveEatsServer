import dotenv from "dotenv";

// Libraries
import express from "express";


const Router = express.Router();
console.log("🔐 Stripe Private Key:", process.env.STRIPE_PRIVATE_KEY);
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);


Router.post("/checkout", async (req, res) => {
    try {
        const { products } = req.body;
        if (!products || products.length === 0) {
            return res.status(400).json({ error: "No products provided" });
        }
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "USD",
                product_data: {
                    name: product.name,

                },
                unit_amount: product.price * 100,
            },
            quantity: product.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel"
        })
        console.log(session);
        res.json({ id: session.id });
    }
    catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: error.message });
    }

})

export default Router;