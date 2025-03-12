import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

function RestaurantInfo(props) {

    const isRestaurantOpen = (restaurantTimings) => {
        if (!restaurantTimings) return false;

        const [openingTime, closingTime] = restaurantTimings.split(" - ");

        // Convert time strings to Date objects
        const now = new Date();
        const openingDate = new Date();
        const closingDate = new Date();

        // Convert 12-hour format (AM/PM) to 24-hour format
        const convertTo24Hour = (time) => {
            let [hour, minute] = time.match(/\d+/g).map(Number);
            const isPM = time.toLowerCase().includes("pm");
            if (hour === 12) hour = isPM ? 12 : 0; // Handle 12 AM and 12 PM correctly
            else if (isPM) hour += 12;
            return { hour, minute };
        };

        // const [openHour, openMinute] = openingTime.split(":").map(Number);
        // const [closeHour, closeMinute] = closingTime.split(":").map(Number);

        const { hour: openHour, minute: openMinute } = convertTo24Hour(openingTime);
        const { hour: closeHour, minute: closeMinute } = convertTo24Hour(closingTime);

        openingDate.setHours(openHour, openMinute, 0);
        closingDate.setHours(closeHour, closeMinute, 0);

        // Handle overnight timings (e.g., 10:00 PM - 3:00 AM)
        if (closingDate < openingDate) {
            if (now < openingDate) {
                openingDate.setDate(openingDate.getDate() - 1);
            } else {
                closingDate.setDate(closingDate.getDate() + 1);
            }
        }

        return now >= openingDate && now <= closingDate;
    };
    const openStatus = isRestaurantOpen(props.restaurantTimings) ? "Open Now" : "Closed";
    console.log(props.name);
    return (
        <>
            <div className="my-4">
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-3">
                    <h1 className="text-3xl font-bold">{props.name}</h1>
                    <div className="flex items-center gap-6 text-xs md:text-base">
                        <div className="flex items-center gap-2">
                            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
                                {props.restaurantRating} <TiStarFullOutline />
                            </span>
                            <span>
                                <strong>2</strong>
                                <p className="border-dashed border-b">Dining Reviews</p>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 px-2 py-1">
                                {props.deliveryRating} <TiStarFullOutline />
                            </span>
                            <span>
                                <strong>200</strong>
                                <p className="border-dashed border-b">Delivery Reviews</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-base md:text-lg text-gray-600 flex flex-col gap-2 md:block">
                    <h3>{props.cuisine && props.cuisine.join(", ")}</h3>
                    <h3 className="text-gray-400">{props.address}</h3>
                    <div>
                        {/* <span className="text-yellow-500">Open Now </span> {props.restaurantTimings} */}
                        <span className={`font-bold ${openStatus === "Open Now" ? "text-green-500" : "text-CraveEats-500"}`}>
                            {openStatus}
                        </span>{" "}
                        {props.restaurantTimings}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RestaurantInfo;