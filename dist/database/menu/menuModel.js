"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MenuSchema = new _mongoose["default"].Schema({
  menus: [{
    name: {
      type: String,
      required: true
    },
    items: [{
      type: _mongoose["default"].Types.ObjectId,
      ref: "Foods"
    }]
  }],
  recommended: [{
    type: _mongoose["default"].Types.ObjectId,
    ref: "Foods",
    unique: true
  }]
}, {
  timestamps: true
});
var MenuModel = exports.MenuModel = _mongoose["default"].model("Menus", MenuSchema);