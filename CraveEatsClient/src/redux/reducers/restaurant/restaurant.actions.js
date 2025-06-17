import axios from "axios";

// Redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: "https://craveeats-server-a514484aed4c.herokuapp.com/restaurant/?city=Los Angeles",
        });

        return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
    } catch (error) {
        return dispatch({
            type: "ERROR",
            message: error.message,
            status: error.response ? error.response.status : null,
        });
    }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
    try {

        const restaurant = await axios({
            method: "GET",
            url: `https://craveeats-server-a514484aed4c.herokuapp.com/restaurant/${_id}`,
        });
        console.log(restaurant);

        return dispatch({
            type: GET_SPECIFIC_RESTAURANT,
            payload: restaurant.data,
        });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};