import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


// component
import DeliveryCarousel from './deliveryCarousel.component';
import RestaurantCard from '../Card/RestaurantCard.component';

function Delivery() {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((store) => store.restaurant.restaurants);

    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);

    return (
        <>
            <div>
                <DeliveryCarousel />
                <h1 className='text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold'>
                    Delivery Restaurant in Los Angeles
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
