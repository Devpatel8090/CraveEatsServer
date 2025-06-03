import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { BsShieldLockFill } from "react-icons/bs";

export default function CheckoutForm({ totalAmount }) {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe is not loaded yet.");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error(error);
            alert(error.message);
        } else {
            alert("Payment Successful!");
            console.log("Payment Method:", paymentMethod);
        }
    };

    return (
        <form onSubmit={handlePayment} className="w-full flex flex-col gap-4">
            <CardElement className="p-3 border rounded-md" />
            <button
                type="submit"
                disabled={!stripe}
                className="w-full h-14 text-white font-medium text-lg bg-CraveEats-400 rounded-lg flex items-center justify-center gap-2"
            >
                Pay Securely <BsShieldLockFill />
            </button>
        </form>
    );
}
