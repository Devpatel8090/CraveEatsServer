import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getRestaurant } from "../redux/reducers/restaurant/restaurant.actions";

//component
import Delivery from '../components/Delivery/delivery.component';
import Dining from '../components/Dining/Dining.component';
import NightLife from "../components/NightLife/nightLife.component";
import Nutrition from "../components/Nutrition/nutrition.component";

function HomePage() {
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant());
    }, []);

    return (
        <>
            <div className="my-5">
                {type === "delivery" && <Delivery />}
                {type === "dining" && <Dining />}
                {type === "night" && <NightLife />}
                {type === "nutri" && <Nutrition />}
            </div>
        </>
    )
}

export default HomePage;