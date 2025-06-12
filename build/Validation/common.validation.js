"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateId = exports.ValidateCategory = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ValidateId = exports.ValidateId = function ValidateId(resId) {
  var Schema = _joi["default"].object({
    _id: _joi["default"].string().required()
  });
  return Schema.validateAsync(id);
};
var ValidateCategory = exports.ValidateCategory = function ValidateCategory(category) {
  var Schema = _joi["default"].object({
    category: _joi["default"].string().required()
  });
  return Schema.validateAsync(category);
};