import axios from "axios";

// redux types
import { SIGN_OUT, SIGN_IN, SIGN_UP, GOOGLE_AUTH } from "./auth.type";

// redux actions
import { clearUser } from "../User/user.action";

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:3000/auth/signin`,
            data: { credentials: userData },
        });

        localStorage.setItem(
            "CraveEatsUser",
            JSON.stringify({ token: User.data.token })
        );

        window.location.reload();

        return dispatch({ type: SIGN_IN, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:3000/auth/signup`,
            data: { credentials: userData },
        });

        localStorage.setItem(
            "CraveEatsUser",
            JSON.stringify({ token: User.data.token })
        );

        window.location.reload();

        return dispatch({ type: SIGN_UP, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("CraveEatsUser");
        clearUser();
        window.location.href = "http://localhost:5173/delivery";

        return dispatch({ type: SIGN_OUT, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const googleAuth = (token) => async (dispatch) => {
    try {
        localStorage.setItem("CraveEatsUser", JSON.stringify({ token }));

        return dispatch({ type: GOOGLE_AUTH, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};