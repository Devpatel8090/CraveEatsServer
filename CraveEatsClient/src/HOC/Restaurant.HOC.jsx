import React from "react";
import { Route, Router, Routes } from "react-router-dom";

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

            <Routes>
                <Route
                    {...rest}
                    element={
                        <RestaurantLayout>
                            <Component />
                        </RestaurantLayout>
                    }
                />
            </Routes>

        </>
    );
}

export default RestaurantLayoutHoc;