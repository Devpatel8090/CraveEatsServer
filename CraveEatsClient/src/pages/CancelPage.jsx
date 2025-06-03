import React from 'react';
import { useNavigate } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";

// Component
import Navbar from '../components/Navbar/nav.component';

function CancelPage() {
    const navigate = useNavigate();

    <div>
        <Navbar />

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
                <BsXCircle className="text-red-500 text-6xl mb-4" />
                <h1 className="text-2xl font-semibold text-gray-800">Payment Failed!</h1>
                <p className="text-gray-600 mt-2">Something went wrong with your payment. Please try again.</p>

                <div className="mt-6 space-y-2">
                    <button
                        className="w-full px-6 py-3 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 transition"
                        onClick={() => navigate("/checkout")}
                    >
                        Retry Payment
                    </button>
                    <button
                        className="w-full px-6 py-3 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    </div>

}

export default CancelPage
