import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import Navbar from "../components/Navbar/nav.component";
import ImageGrid from "../components/Restaurant/ImageGrid.component";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo.component";
import Tabs from "../components/Restaurant/Tabs.component";
import InfoButtonsTabs from "../components/Restaurant/InfoButtonsTabs.component";

function RestaurantLayout({ children }) {
    const [restaurant, setRestaurant] = useState({
        images: [
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
        ],
        name: "Bakehouse Comfort",
        cuisine: "Bakery, Desserts, Fast Food",
        address: "Biryani, Hyderabadi, Andhra, North Indian, Chinese, Desserts",
        restaurantRating: 4.1,
        deliveryRating: 3.2,
    });

    const [images, setImages] = useState([]);

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