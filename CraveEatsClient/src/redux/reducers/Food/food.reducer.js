import { GET_FOOD_LIST, GET_FOOD_CATEGORY_LIST, GET_FOOD } from "./food.type";

const initialState = {
    foodList: [],
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD_LIST:
            return {
                ...state,
                foodList: action.payload,
            };
        case GET_FOOD_CATEGORY_LIST:
            return {
                ...state,
                foodCategories: action.payload
            };
        case GET_FOOD:
            return {
                ...state,
                foodDetails: action.payload
            }
        default:
            return {
                ...state,
            };
    }
};
export default foodReducer;