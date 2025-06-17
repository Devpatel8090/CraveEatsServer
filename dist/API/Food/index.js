"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _allModelsIndex = require("../../database/allModelsIndex");
var _common = require("../../Validation/common.validation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // libraries
// Modals
// Validation
var Router = _express["default"].Router();

/**
 * Route           /categories
 * Des              Get all distinct the food category
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/categories', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var categories, categoryData, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return _allModelsIndex.FoodModel.distinct("category");
        case 1:
          categories = _context2.v;
          if (!(!categories || categories.length === 0)) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, res.status(404).json({
            error: "No categories found"
          }));
        case 2:
          _context2.n = 3;
          return Promise.all(categories.map(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(cat) {
              var food, photoUrl;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return _allModelsIndex.FoodModel.findOne({
                      category: cat
                    }, "photos");
                  case 1:
                    food = _context.v;
                    _context.n = 2;
                    return _allModelsIndex.ImageModel.findById(food.photos);
                  case 2:
                    photoUrl = _context.v;
                    console.log(photoUrl);
                    return _context.a(2, {
                      category: cat,
                      photo: (food === null || food === void 0 ? void 0 : food.photos) || null,
                      photoUrl: (photoUrl === null || photoUrl === void 0 ? void 0 : photoUrl.images[0].Location) || "https://aadhya-restaurant-bucket.s3.us-west-1.amazonaws.com/No+image+Availble.png"
                    });
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 3:
          categoryData = _context2.v;
          return _context2.a(2, res.status(200).json({
            categoryData: categoryData
          }));
        case 4:
          _context2.p = 4;
          _t = _context2.v;
          return _context2.a(2, res.status(500).json({
            error: _t.message
          }));
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/**
 * Route        /:_id
 * Des          GET food based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */
Router.get("/:_id", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var _id, foods, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.p = 0;
          _id = req.params._id;
          _context3.n = 1;
          return _allModelsIndex.FoodModel.findById(_id);
        case 1:
          foods = _context3.v;
          return _context3.a(2, res.json({
            foods: foods
          }));
        case 2:
          _context3.p = 2;
          _t2 = _context3.v;
          return _context3.a(2, res.status(500).json({
            error: _t2.message
          }));
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());

/**
 * Route           /r/:_id  
 * Des              Get all food based on particular restaurants
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/r/:_id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _id, foods, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return (0, _common.ValidateId)(req.params);
        case 1:
          _id = req.params._id;
          _context4.n = 2;
          return _allModelsIndex.FoodModel.find();
        case 2:
          foods = _context4.v;
          return _context4.a(2, res.json({
            foods: foods
          }));
        case 3:
          _context4.p = 3;
          _t3 = _context4.v;
          return _context4.a(2, res.status(500).json({
            error: _t3.message
          }));
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}());

/**
 * Route           /c/:_category
 * Des              Get all food based on particular category
 * Params           none
 * Access           Public
 * Method           GET
 */

Router.get('/r/:category', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var category, foods, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return (0, _common.ValidateCategory)(req.params);
        case 1:
          category = req.params.category;
          _context5.n = 2;
          return _allModelsIndex.FoodModel.find({
            category: {
              $regex: category,
              $options: "i"
            }
          });
        case 2:
          foods = _context5.v;
          if (foods) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(400).json({
            error: "No food matched with ".concat(category)
          }));
        case 3:
          return _context5.a(2, res.json({
            foods: foods
          }));
        case 4:
          _context5.p = 4;
          _t4 = _context5.v;
          return _context5.a(2, res.status(500).json({
            error: _t4.message
          }));
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = exports["default"] = Router;