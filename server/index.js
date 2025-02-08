require(`dotenv`).config();
// Babel compiler   is used to convert the javascript (i.e Es6 to Es5 (browser compatibility))
require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
import express from "express";  // ES6
// const express = require("express"); // es5
const cors = require("cors");
const mongoose = require("mongoose");


// Database connnection
import ConnectDB from "./database/connection";

// API
import Auth from "./API/Auth/index";


const helmet = require('helmet');

const foodieApp = express();   // tells app to use express
foodieApp.use(cors());  // middle wares(additional functionality(Please accept all the request)) (for cross origin request(redirect from google.com/dev to amzon.com/chai.   fronted and backend hosted on different website (cors should be set up only on one side either backend or frontend) ))
foodieApp.use(express.json()); // body parcel middleware(parse the body in json)
foodieApp.use(express.urlencoded({ extended: true }));
foodieApp.use(helmet());      // for security purpose(securing express by giving various http headers)

// Applicatino Routes
foodieApp.use("/auth", Auth);


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