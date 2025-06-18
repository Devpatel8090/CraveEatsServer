"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var UserSchema = new _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  address: [{
    detail: {
      type: String
    },
    "for": {
      type: String
    }
  }],
  phoneNumber: [{
    type: Number
  }]
}, {
  timestamps: true
});

// for universal access
// use methods can be used when you want to data in between the process. (this can be used in methods ) 
UserSchema.methods.generateJwtToken = function () {
  // generate the JWT auth token  (for authorizing the user Jsonwebtoken)
  var token = _jsonwebtoken["default"].sign({
    user: this._id.toString()
  }, process.env.TOKEN_GENERATOR); // token would contain fullName and email
  return token;
};

// Helper functions
UserSchema.statics.findByEmailAndPhone = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var email, phoneNumber, checkUserByEmail, checkUserByPhone;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          email = _ref.email, phoneNumber = _ref.phoneNumber;
          _context.n = 1;
          return UserModel.findOne({
            email: email
          });
        case 1:
          checkUserByEmail = _context.v;
          _context.n = 2;
          return UserModel.findOne({
            phoneNumber: phoneNumber
          });
        case 2:
          checkUserByPhone = _context.v;
          if (!(checkUserByEmail || checkUserByPhone)) {
            _context.n = 3;
            break;
          }
          throw new Error("User already exists!");
        case 3:
          return _context.a(2, false);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
UserSchema.statics.findByEmailAndPassword = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_ref3) {
    var email, password, user, doesPasswordMatch;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          email = _ref3.email, password = _ref3.password;
          _context2.n = 1;
          return UserModel.findOne({
            email: email
          });
        case 1:
          user = _context2.v;
          if (user) {
            _context2.n = 2;
            break;
          }
          throw new Error("User does not exists");
        case 2:
          _context2.n = 3;
          return _bcryptjs["default"].compare(password, user.password);
        case 3:
          doesPasswordMatch = _context2.v;
          if (doesPasswordMatch) {
            _context2.n = 4;
            break;
          }
          throw new Error("invalid Password!!!");
        case 4:
          return _context2.a(2, user);
      }
    }, _callee2);
  }));
  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}();

// pre means before save do this
// YOu can not use async. you need to use call back

UserSchema.pre("save", function (next) {
  var user = this;

  // password is modified
  if (!user.isModified("password")) return next();

  //generate bcrypt salt
  _bcryptjs["default"].genSalt(8, function (error, salt) {
    if (error) {
      return next(error);
    }

    // Hash password
    _bcryptjs["default"].hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      return next();
    });
  });
});
var UserModel = exports.UserModel = _mongoose["default"].model("Users", UserSchema);