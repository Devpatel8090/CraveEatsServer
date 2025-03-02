import React, { Component } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

// Layout
import HomeLayout from '../layouts/Homepage.layout';

function HomeLayoutHoc({ component: Component, ...rest }) {
    return (
        <>
            <HomeLayout>
                <Component {...rest} />
                <Outlet />
            </HomeLayout>

        </>
    )
}

export default HomeLayoutHoc;