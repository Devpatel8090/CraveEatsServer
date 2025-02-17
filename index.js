require(`dotenv`).config();
// Babel compiler   is used to convert the javascript (i.e Es6 to Es5 (browser compatibility))
require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
import express from "express";  // ES6
import passport from "passport";
const session = require("express-session");
// const express = require("express"); // es5
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require('helmet');


// Database connnection
import ConnectDB from "./database/connection";

//  google authentication config
import googleAuthConfig from "./config/google.config";

// private route authentication config
import privateRouteConfig from "./config/route.config";


// API
import Auth from "./API/Auth/index";
import Restaurant from "./API/Restaurant/index";
import Food from "./API/Food/index";
import Menu from "./API/Menu/index";
import Image from "./API/Image/index";
import Order from "./API/Orders/index";
import Review from "./API/Reviews/index";
import User from "./API/User/index";



// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const foodieApp = express();   // tells app to use express
foodieApp.use(cors());  // middle wares(additional functionality(Please accept all the request)) (for cross origin request(redirect from google.com/dev to amzon.com/chai.   fronted and backend hosted on different website (cors should be set up only on one side either backend or frontend) ))
foodieApp.use(express.json()); // body parcel middleware(parse the body in json)
foodieApp.use(express.urlencoded({ extended: true }));
foodieApp.use(helmet());      // for security purpose(securing express by giving various http headers)
foodieApp.use(
    session({
        secret: process.env.SESSION_SECRET_KEY
    }));

foodieApp.use(passport.initialize()); // passport initialized
foodieApp.use(passport.session()); // session is available through out the website

// passport config


// Applicatino Routes
foodieApp.use("/auth", Auth);
foodieApp.use("/restaurant", Restaurant);
foodieApp.use("/food", Food);
foodieApp.use("/menu", Menu);
foodieApp.use("/image", Image);
foodieApp.use("/order", Order);
foodieApp.use("/review", Review);
foodieApp.use("/user", User);


foodieApp.listen(3000, () => {
    ConnectDB().then(() => {
        console.log("server is running!!!");
    }).catch((error) => {
        console.log("server is running, but database connection failed");
        console.log(error);
    })
});


foodieApp.get("/", (req, res) => {
    return res.json({ "welcome": `to my backend software for the foodieApp-Master` });
})