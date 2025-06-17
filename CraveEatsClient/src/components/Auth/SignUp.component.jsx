import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

// redux
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/reducers/Auth/auth.action";

function Signup({ isOpen, onClose }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fullName: "",
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const submit = () => {
        dispatch(signUp(userData));
        setUserData({ email: "", password: "", fullName: "" });
        console.log(userData);
        onclose();
    };



    const googleSignUp = () => {
        window.location.href = "https://craveeats-server-a514484aed4c.herokuapp.com/auth/google";
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
                        <div className="grid grid-cols-2 items-center justify-between relative ">
                            <h3 className="text-lg font-medium text-gray-900">Sign Up</h3>
                            {/* <button onClick={onClose} className="px-2 py-1 w-1/2 bg-CraveEats-100 text-white rounded text-center right-0">
                            Close
                        </button> */}
                            <button
                                className="absolute right-3 text-CraveEats-600 hover:text-gray-900 border border-CraveEats-600 px-1"
                                onClick={onClose}
                            >
                                X
                            </button>
                        </div>
                        <div className="mt-4 flex flex-col gap-3">
                            <button
                                className="py-2 flex items-center justify-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100 rounded-lg"
                                onClick={googleSignUp}
                            >
                                Sign Up With Google <FcGoogle />
                            </button>

                            <form className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={userData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="border border-gray-400 px-3 py-2 rounded-lg focus:border-CraveEats-100"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        placeholder="user@email.com"
                                        className="border border-gray-400 px-3 py-2 rounded-lg focus:border-CraveEats-100"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        placeholder="**********"
                                        className="border border-gray-400 px-3 py-2 rounded-lg focus:border-CraveEats-100"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full text-center bg-CraveEats-400 text-white py-2 rounded-lg mt-2 hover:bg-CraveEats-700"
                                    onClick={submit}
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Signup;
