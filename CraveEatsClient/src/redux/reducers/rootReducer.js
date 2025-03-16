import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/image.reducer";
import review from "./Review/review.reducer";
import user from "./User/user.reducer";
import auth from "./Auth/auth.reducer";
import food from "./Food/food.reducer"


const rootReducer = combineReducers({ restaurant, image, review, user, auth, food });

export default rootReducer;