import React from "react";

// components
import Navbar from '../components/Navbar/nav.component.jsx';
import FoodTab from '../components/FoodTab/foodTab.component.jsx';

function HomeLayout({ props, children }) {
    return (
        <>
            <Navbar />
            <FoodTab />
            <div className="container mx-auto px-4  lg:px-20">{children}</div>
            <h1>Footer</h1>
        </>
    )
}

export default HomeLayout;