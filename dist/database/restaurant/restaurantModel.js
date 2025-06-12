"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RestaurantModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RestaurantSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mapLocation: {
    type: String,
    required: true
  },
  cuisine: [String],
  restaurantTimings: String,
  contactNumber: String,
  website: String,
  popularDishes: [String],
  averageCost: Number,
  amenities: [String],
  menuImages: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Images"
  },
  menu: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Menus"
  },
  // reviews: [
  //     {
  //         type: mongoose.Types.ObjectId,
  //         ref: "Reviews"
  //     }
  // ],
  photos: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Images"
  }
}, {
  timestamps: true
});
var RestaurantModel = exports.RestaurantModel = _mongoose["default"].model("Restaurants", RestaurantSchema);