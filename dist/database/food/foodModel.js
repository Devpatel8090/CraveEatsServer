"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FoodSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isVeg: {
    type: Boolean,
    required: true
  },
  isContainsEgg: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  photos: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Images"
  },
  price: {
    type: Number,
    "default": 150,
    required: true
  },
  addOns: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: "Foods"
  }],
  restaurant: {
    type: _mongoose["default"].Types.ObjectId,
    ref: "Restaurants",
    required: true
  }
}, {
  timestamps: true
});
var FoodModel = exports.FoodModel = _mongoose["default"].model("Foods", FoodSchema);