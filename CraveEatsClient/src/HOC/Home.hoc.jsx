import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layout
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({ component: Component, ...rest }) {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    element={
                        <HomeLayout>
                            <Component />
                        </HomeLayout>
                    }
                />
            </Routes>

        </>
    )
}

export default HomeLayoutHoc;