import { combineReducers } from "redux";

// reducers
import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/image.reducer";
import review from "./Review/review.reducer";
import user from "./User/user.reducer";

const rootReducer = combineReducers({ restaurant, image, review, user });

export default rootReducer;