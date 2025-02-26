import React from "react";
import { useParams } from "react-router-dom";

//component
import Delivery from '../components/Delivery/delivery.component';
import Dining from '../components/Dining/Dining.component';
import NightLife from "../components/NightLife/nightLife.component";
import Nutrition from "../components/Nutrition/nutrition.component";

function HomePage() {
    const { type } = useParams();
    console.log(type);
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