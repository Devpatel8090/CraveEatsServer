"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateSignup = exports.ValidateSignin = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ValidateSignup = exports.ValidateSignup = function ValidateSignup(userData) {
  var Schema = _joi["default"].object({
    fullName: _joi["default"].string().required().min(5).max(30),
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().min(5),
    address: _joi["default"].array().items(_joi["default"].object({
      detail: _joi["default"].string(),
      "for": _joi["default"].string()
    })),
    phoneNumber: _joi["default"].array().items(_joi["default"].number().min(10).max(10))
  });
  return Schema.validateAsync(userData);
};
var ValidateSignin = exports.ValidateSignin = function ValidateSignin(userData) {
  var Schema = _joi["default"].object({
    email: _joi["default"].string().email().required(),
    password: _joi["default"].string().required()
  });
  return Schema.validateAsync(userData);
};