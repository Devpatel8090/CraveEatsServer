"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _allModelsIndex = require("../../database/allModelsIndex");
var _restaurant = require("../../Validation/restaurant.validation");
var _common = require("../../Validation/common.validation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // Libraries
// Database Modal
// Validation
var Router = _express["default"].Router();

/**
 * Route           /  
 * Des              Get all the restaurant details based on the city
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var city, restaurants, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.p = 0;
          // http://Localhost:3000/restaurant/?city=ncr
          // destructuring
          // await ValidateRestaurantCity(city)
          city = req.query.city;
          if (city) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "City parameter is required"
          }));
        case 1:
          console.log(city);
          _context.n = 2;
          return _allModelsIndex.RestaurantModel.find({
            city: new RegExp("^".concat(city, "$"), 'i')
          });
        case 2:
          restaurants = _context.v;
          console.log(restaurants);
          if (!(restaurants.length === 0)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, res.json({
            error: "No restaurants found in this city"
          }));
        case 3:
          return _context.a(2, res.json({
            restaurants: restaurants
          }));
        case 4:
          _context.p = 4;
          _t = _context.v;
          return _context.a(2, res.status(500).json({
            error: _t.message
          }));
      }
    }, _callee, null, [[0, 4]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/**
 * Route           /:_id  
 * Des              Get individual restaurant details based on id
 * Params           _id
 * Access           Public
 * Method           GET
 */

Router.get('/:_id', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var _id, restaurant, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _id = req.params._id; // await ValidateId(_id);
          _context2.n = 1;
          return _allModelsIndex.RestaurantModel.findById(_id);
        case 1:
          restaurant = _context2.v;
          if (restaurant) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(400).json({
            error: "Restaurant Not found"
          }));
        case 2:
          return _context2.a(2, res.json({
            restaurant: restaurant
          }));
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          return _context2.a(2, res.status(500).json({
            error: _t2.message
          }));
      }
    }, _callee2, null, [[0, 3]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/**
 * Route           /search  
 * Des              Get restaurant details based on search string
 * Params           searchString
 * Access           Public
 * Method           GET
 */

Router.get('/search/:searchString', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var searchString, restaurants, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          searchString = req.params.searchString;
          _context3.n = 1;
          return (0, _restaurant.ValidateRestaurantSearchString)(searchString);
        case 1:
          _context3.n = 2;
          return _allModelsIndex.RestaurantModel.find({
            name: {
              $regex: searchString,
              $options: "i"
            }
          });
        case 2:
          restaurants = _context3.v;
          if (restaurants) {
            _context3.n = 3;
            break;
          }
          return _context3.a(2, res.status(404).json({
            error: "No restaurant matched with ".concat(searchString)
          }));
        case 3:
          return _context3.a(2, res.json({
            restaurants: restaurants
          }));
        case 4:
          _context3.p = 4;
          _t3 = _context3.v;
          return _context3.a(2, res.status(500).json({
            error: _t3.message
          }));
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = exports["default"] = Router;