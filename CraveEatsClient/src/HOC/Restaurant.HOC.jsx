import React from "react";
import { Route, Router, Routes, Outlet } from "react-router-dom";

// layout
import RestaurantLayout from "../layouts/Restaurant.layout";

function RestaurantLayoutHoc({ component: Component, ...rest }) {
    return (
        <>
            {/* <Route
                {...rest}
                component={(props) => (
                    <RestaurantLayout>
                        <Component {...props} />
                    </RestaurantLayout>
                )}
            /> */}

            <RestaurantLayout>
                {/* <Component {...rest} /> */}
                <Outlet />
            </RestaurantLayout>

        </>
    );
}

export default RestaurantLayoutHoc;