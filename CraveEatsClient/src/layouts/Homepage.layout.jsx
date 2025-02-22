import React from "react";
import Navbar from '../components/Navbar/nav.component.jsx';
function HomeLayout({ props, children }) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4  lg:px-20">{children}</div>
            <h1>Footer</h1>
        </>
    )
}

export default HomeLayout;