import {
    GET_CART,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "./cart.type";

const initialState = {
    cart: [],
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: action.payload,
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart: action.payload,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};
export default CartReducer;