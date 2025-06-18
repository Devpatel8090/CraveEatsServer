"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _passport = _interopRequireDefault(require("passport"));
var _connection = _interopRequireDefault(require("./database/connection"));
var _google = _interopRequireDefault(require("./config/google.config"));
var _route = _interopRequireDefault(require("./config/route.config"));
var _index = _interopRequireDefault(require("./API/Auth/index"));
var _index2 = _interopRequireDefault(require("./API/Restaurant/index"));
var _index3 = _interopRequireDefault(require("./API/Food/index"));
var _index4 = _interopRequireDefault(require("./API/Menu/index"));
var _index5 = _interopRequireDefault(require("./API/Image/index"));
var _index6 = _interopRequireDefault(require("./API/Orders/index"));
var _index7 = _interopRequireDefault(require("./API/Reviews/index"));
var _index8 = _interopRequireDefault(require("./API/User/index"));
var _index9 = _interopRequireDefault(require("./API/Payments/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require("dotenv").config();
_dotenv["default"].config();
// Babel compiler   is used to convert the javascript (i.e Es6 to Es5 (browser compatibility))
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"]
});
// ES6

var session = require("express-session");
// const express = require("express"); // es5
var cors = require("cors");
var mongoose = require("mongoose");
var helmet = require('helmet');

// Database connnection

//  google authentication config

// private route authentication config

// API

// passport config
(0, _google["default"])(_passport["default"]);
(0, _route["default"])(_passport["default"]);
var craveEats = (0, _express["default"])(); // tells app to use express
craveEats.use(cors()); // middle wares(additional functionality(Please accept all the request)) (for cross origin request(redirect from google.com/dev to amzon.com/chai.   fronted and backend hosted on different website (cors should be set up only on one side either backend or frontend) ))
craveEats.use(_express["default"].json()); // body parcel middleware(parse the body in json)
craveEats.use(_express["default"].urlencoded({
  extended: true
}));
craveEats.use(helmet()); // for security purpose(securing express by giving various http headers)
craveEats.use(session({
  secret: process.env.SESSION_SECRET_KEY
}));
craveEats.use(_passport["default"].initialize()); // passport initialized
craveEats.use(_passport["default"].session()); // session is available through out the website

// passport config

// Applicatino Routes
craveEats.use("/auth", _index["default"]);
craveEats.use("/restaurant", _index2["default"]);
craveEats.use("/food", _index3["default"]);
craveEats.use("/menu", _index4["default"]);
craveEats.use("/image", _index5["default"]);
craveEats.use("/order", _index6["default"]);
craveEats.use("/review", _index7["default"]);
craveEats.use("/user", _index8["default"]);
craveEats.use("/payment", _index9["default"]);
craveEats.listen(3000, function () {
  (0, _connection["default"])().then(function () {
    console.log("server is running!!!");
  })["catch"](function (error) {
    console.log("server is running, but database connection failed");
    console.log(error);
  });
});
craveEats.get("/", function (req, res) {
  return res.json({
    "welcome": "to my backend software for the craveEats-Master"
  });
});