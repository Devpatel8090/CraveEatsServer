

import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";


//component
import Navbar from '../components/Navbar/nav.component';

function SuccessPage() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />

            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
                    <BsCheck2Circle className="text-green-500 text-6xl mb-4" />
                    <h1 className="text-2xl font-semibold text-gray-800">Payment Successful!</h1>
                    <p className="text-gray-600 mt-2">Your order has been placed successfully.</p>

                    <div className="mt-6 space-y-2">
                        <button
                            className="w-full px-6 py-3 text-white bg-CraveEats-400 rounded-lg shadow hover:bg-CraveEats-500 transition"
                            onClick={() => navigate("/orders")}
                        >
                            View Order Details
                        </button>
                        <button
                            className="w-full px-6 py-3 text-CraveEats-400 border border-CraveEats-400 rounded-lg hover:bg-CraveEats-50 transition"
                            onClick={() => navigate("/")}
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SuccessPage;
