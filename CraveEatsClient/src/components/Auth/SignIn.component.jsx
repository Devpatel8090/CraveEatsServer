
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

// redux
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/reducers/Auth/auth.action";


function Signin({ isOpen, onClose }) {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const submit = () => {
        dispatch(signIn(userData));
        setUserData({ email: "", password: "" });
        onClose();
    };


    const googleSignIn = () =>
        (window.location.href = "https://craveeats-server-a514484aed4c.herokuapp.com/auth/google");

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
                    <div className="grid grid-cols-2 items-center justify-between relative ">
                        <h3 className="text-lg font-medium text-gray-900">Sign In</h3>
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


                    <div className="mt-4 flex flex-col gap-3 w-full">
                        <button className="py-2 flex justify-center items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100" onClick={googleSignIn}>
                            Sign In With Google <FcGoogle />
                        </button>

                        <form className="flex flex-col gap-2">
                            <div className="w-full flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    placeholder="user@email.com"
                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-CraveEats-400"
                                />
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    placeholder="**********"
                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-CraveEats-400"
                                />
                            </div>
                            <button
                                className="w-full text-center bg-CraveEats-400 text-white py-2 rounded-lg mt-2"
                                onClick={submit}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Signin;