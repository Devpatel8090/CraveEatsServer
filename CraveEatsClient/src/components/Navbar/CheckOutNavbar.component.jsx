import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

// redux
import { useSelector } from "react-redux";




function CheckoutNavbar() {
    const reduxState = useSelector((globalState) => globalState.user.user);
    const [user] = useState({
        fullName: "John Doe",
        image:
            "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg",
    });

    return (
        <>
            <nav className="p-4 flex bg-white shadow-md  w-full items-center">
                <div className="container px-4 md:px-20 mx-auto">
                    <div className="flex items-center justify-between w-full">
                        <AiOutlineArrowLeft />
                        <div className="w-28">
                            <img
                                src="/app_logo.png"
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="border border-gray-300 text-CraveEats-400 w-12 h-12 rounded-full">
                                <img
                                    src={user?.image > 0 ? user.image : "https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-brunette-woman-short-hair-avatar-cartoon-character-vector-149728784.jpg"}
                                    alt={reduxState.user?.email}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            {reduxState.user?.fullName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default CheckoutNavbar;