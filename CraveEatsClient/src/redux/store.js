import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// adds asynchronous functionality
import { thunk } from "redux-thunk";

import { createLogger } from "redux-logger";



const logger = createLogger();

import rootReducer from "./reducers/rootReducer";


// redux middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    // const { logger } = require("redux-logger");
    middlewares.push(logger);
}

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
        devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
    }
);
export default store;
