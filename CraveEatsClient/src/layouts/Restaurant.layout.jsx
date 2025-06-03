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
import CartContainer from "../components/Cart/CartContainer.component";

import { useParams, useNavigate, useLocation } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getSpecificRestaurant } from "../redux/reducers/restaurant/restaurant.actions";
import { getImage } from "../redux/reducers/Image/image.action";
import { getCart } from "../redux/reducers/Cart/cart.action";

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
    const navigate = useNavigate();
    const continueToReview = () => {
        navigate(`/restaurant/${id}/reviews`);
    }

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            if (!data.payload || !data.payload.restaurant) {
                console.error("Restaurant data is undefined!");
                return;
            }
            setRestaurant((prev) => ({
                ...prev,
                ...data.payload.restaurant,
            }));
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
        dispatch(getCart());
    }, [id, dispatch]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
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
                    <InfoButtonsTabs isActive={true} onClick={continueToReview}>
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
            <CartContainer />
        </>
    );
}

export default RestaurantLayout;