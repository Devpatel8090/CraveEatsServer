import axios from "axios";

// redux types
import {
    GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "./cart.type";

export const getCart = () => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.CraveEatsCart) {
            const { cart } = JSON.parse(localStorage.getItem("CraveEatsCart"));
            cartData.cart = cart;
        }

        return dispatch({ type: GET_CART, payload: cartData.cart });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const addToCart = (newFood) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.CraveEatsCart) {
            const { cart } = JSON.parse(localStorage.getItem("CraveEatsCart"));
            cartData.cart = cart;
        }

        cartData.cart.push(newFood);

        localStorage.setItem("CraveEatsCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: ADD_TO_CART, payload: cartData.cart });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const DeleteCart = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.CraveEatsCart) {
            const { cart } = JSON.parse(localStorage.getItem("CraveEatsCart"));
            cartData.cart = cart;
        }

        if (!cartData.cart.length) {
            return dispatch({ type: "ERROR", payload: "Cart is empty" });
        }

        cartData.cart = cartData.cart.filter(({ _id }) => _id !== foodId);

        localStorage.setItem("CraveEatsCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: DELETE_FROM_CART, payload: cartData.cart });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const increaseQuantity = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.CraveEatsCart) {
            const { cart } = JSON.parse(localStorage.getItem("CraveEatsCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId
                ? {
                    ...food,
                    quantity: food.quantity + 1,
                    totalPrice: food.price * (food.quantity + 1),
                }
                : food
        );

        localStorage.setItem("CraveEatsCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: INCREASE_QUANTITY, payload: cartData.cart });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const decreaseQuantity = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if (localStorage.CraveEatsCart) {
            const { cart } = JSON.parse(localStorage.getItem("CraveEatsCart"));
            cartData.cart = cart;
        }

        cartData.cart = cartData.cart.map((food) =>
            food._id === foodId
                ? {
                    ...food,
                    quantity: food.quantity - 1,
                    totalPrice: food.price * (food.quantity - 1),
                }
                : food
        );

        localStorage.setItem("CraveEatsCart", JSON.stringify({ cart: cartData.cart }));

        return dispatch({ type: DECREASE_QUANTITY, payload: cartData.cart });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};