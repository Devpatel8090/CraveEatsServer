import React, { useEffect } from "react";

// components
import CheckOutNavbar from "../components/Navbar/CheckOutNavbar.component";

// Redux
import { useDispatch } from "react-redux";
import { getCart } from "../redux/reducers/Cart/cart.action"

function CheckoutLayout(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    }, []);

    return (
        <>
            <CheckOutNavbar />
            <div className="container mx-auto px-4 lg:px-20">{props.children}</div>
        </>
    );
}

export default CheckoutLayout;