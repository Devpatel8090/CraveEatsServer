"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateRestaurantSearchString = exports.ValidateRestaurantCity = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ValidateRestaurantCity = exports.ValidateRestaurantCity = function ValidateRestaurantCity(restaurantObject) {
  var Schema = _joi["default"].object({
    city: _joi["default"].string().required()
  });
  return Schema.validateAsync(restaurantObject);
};
var ValidateRestaurantSearchString = exports.ValidateRestaurantSearchString = function ValidateRestaurantSearchString(restaurantObject) {
  var Schema = _joi["default"].object({
    searchString: _joi["default"].string().required()
  });
  return Schema.validateAsync(restaurantObject);
};