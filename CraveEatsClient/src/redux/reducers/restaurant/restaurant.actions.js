import axios from "axios";

// Redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
    try {
        const restaurantList = await axios({
            method: "GET",
            url: "http://localhost:3000/restaurant/?city=ncr",
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