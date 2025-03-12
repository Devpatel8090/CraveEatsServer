import React, { useState, useEffect } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import Navbar from "../components/Navbar/nav.component";
import ImageGrid from "../components/Restaurant/ImageGrid.component";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo.component";
import Tabs from "../components/Restaurant/Tabs.component";
import InfoButtonsTabs from "../components/Restaurant/InfoButtonsTabs.component";

import { useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getSpecificRestaurant } from "../redux/reducers/restaurant/restaurant.actions";
import { getImage } from "../redux/reducers/Image/image.action";

function RestaurantLayout({ children }) {
    const [restaurant, setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
    });

    const { id } = useParams();
    const dispatch = useDispatch();

    console.log(id);

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            console.log("API Response:", data); // Debugging line

            if (!data.payload || !data.payload.restaurant) {
                console.error("Restaurant data is undefined!");
                return;
            }
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload.restaurant,
            }));
            console.log(data.payload);
            if (data.payload.restaurant.photos) {
                dispatch(getImage(data.payload.restaurant.photos)).then((imageData) => {
                    console.log("Image API Response:", imageData);
                    setRestaurant((prev) => ({
                        ...prev,
                        images: imageData.payload?.images || [],
                    }));
                });
            }

        });
    }, [id, dispatch]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 mt-8 lg:px-20 pb-10">
                <ImageGrid images={restaurant.images} />
                <RestaurantInfo
                    name={restaurant?.name}
                    restaurantRating={restaurant?.restaurantRating || 0}
                    deliveryRating={restaurant?.deliveryRating || 0}
                    cuisine={restaurant?.cuisine}
                    address={restaurant?.address}
                    restaurantTimings={restaurant?.restaurantTimings}
                />
                <div className="my-4 flex flex-wrap gap-3 mx-auto">
                    <InfoButtonsTabs isActive={true}>
                        <TiStarOutline /> Add Review
                    </InfoButtonsTabs>
                    <InfoButtonsTabs>
                        <RiDirectionLine /> Direction
                    </InfoButtonsTabs>
                    <InfoButtonsTabs>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtonsTabs>
                    <InfoButtonsTabs>
                        <RiShareForwardLine /> Share
                    </InfoButtonsTabs>
                </div>
                <div className="my-10">
                    <Tabs />
                </div>
                {children}
            </div>
        </>
    );
}

export default RestaurantLayout;