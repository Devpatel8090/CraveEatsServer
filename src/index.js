
// require(`dotenv`).config();
import dotenv from "dotenv";
dotenv.config();
// Babel compiler   is used to convert the javascript (i.e Es6 to Es5 (browser compatibility))
// require("@babel/core").transform("code", {
//     presets: ["@babel/preset-env"],
// });


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
import Payment from "./API/Payments/index";




// passport config
googleAuthConfig(passport);
privateRouteConfig(passport);

const craveEats = express();   // tells app to use express
craveEats.use(cors());  // middle wares(additional functionality(Please accept all the request)) (for cross origin request(redirect from google.com/dev to amzon.com/chai.   fronted and backend hosted on different website (cors should be set up only on one side either backend or frontend) ))
craveEats.use(express.json()); // body parcel middleware(parse the body in json)
craveEats.use(express.urlencoded({ extended: true }));
craveEats.use(helmet());      // for security purpose(securing express by giving various http headers)
craveEats.use(
    session({
        secret: process.env.SESSION_SECRET_KEY
    }));

craveEats.use(passport.initialize()); // passport initialized
craveEats.use(passport.session()); // session is available through out the website

// passport config


// Applicatino Routes
craveEats.use("/auth", Auth);
craveEats.use("/restaurant", Restaurant);
craveEats.use("/food", Food);
craveEats.use("/menu", Menu);
craveEats.use("/image", Image);
craveEats.use("/order", Order);
craveEats.use("/review", Review);
craveEats.use("/user", User);
craveEats.use("/payment", Payment);

const PORT = process.env.PORT || 3000;

craveEats.listen(PORT, () => {
    ConnectDB().then(() => {
        console.log("server is running!!!");
    }).catch((error) => {
        console.log("server is running, but database connection failed");
        console.log(error);
    })
});


craveEats.get("/", (req, res) => {
    return res.json({ "welcome": `to my backend software for the craveEats-Master` });
})
