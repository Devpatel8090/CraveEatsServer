import React from "react";

// components
import CheckOutNavbar from "../components/Navbar/CheckOutNavbar.component";

function CheckoutLayout(props) {
    return (
        <>
            <CheckOutNavbar />
            <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
        </>
    );
}

export default CheckoutLayout;