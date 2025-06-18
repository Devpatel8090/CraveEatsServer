"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ImageSchema = new _mongoose["default"].Schema({
  images: [{
    Location: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});
var ImageModel = exports.ImageModel = _mongoose["default"].model("Images", ImageSchema);