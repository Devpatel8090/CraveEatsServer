"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// exporting default function don't require the name
var _default = exports["default"] = function _default(req, res, next) {
  var _req$session;
  if (!((_req$session = req.session) !== null && _req$session !== void 0 && (_req$session = _req$session.passport) !== null && _req$session !== void 0 && (_req$session = _req$session.user) !== null && _req$session !== void 0 && (_req$session = _req$session._doc) !== null && _req$session !== void 0 && _req$session._id)) {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }
  if (!req.session.passport.user._doc._id.equals(req.params._id)) {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }
  next(); // Only call next() if validation passes
};