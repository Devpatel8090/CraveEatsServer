import React, { useState } from 'react'


// component
import DeliveryCarousel from './deliveryCarousel.component';
import RestaurantCard from '../Card/RestaurantCard.component';

function Delivery() {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "124ksjf435245jv34fg3",
            image: {
                images: [{
                    Location: "/Restaurant_1.avif"
                }]
            },
            isPro: true,
            isOff: true,
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
        {
            _id: "sdffdsadadsfadfadsfadsf",
            image: {
                images: [{
                    Location: "/Restaurant_2.avif"
                }]
            },
            isPro: true,
            isOff: false,
            name: "Master Koii's",
            restaurantReviewValue: "4.6",
            cuisine: ["Asian", "Chinese", "Thai", "Malaysian", "Korean"],
            averageCost: "600",
        },
        {
            _id: "124ksjf435245jfdfv34fg3",
            isPro: true,
            isOff: true,
            image: {
                images: [{
                    Location: "/Restaurant_3.avif"
                }]
            },
            name: "Nathu's Sweets",
            restaurantReviewValue: "3.7",
            cuisine: [
                "Mithai",
                "South Indian",
                "Chinese",
                "Street Food",
                "Fast Food",
                "Desserts",
                "North Indian",
            ],
            averageCost: "450",
        },
    ]);
    return (
        <>
            <div>
                <DeliveryCarousel />
                <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                    Delivery Restaurant in NCR(Delhi)
                </h1>
                <div className='flex justify-between flex-wrap mt-5'>
                    {restaurantList.map(restaurant => (
                        <RestaurantCard{...restaurant} key={restaurant._id} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Delivery;
