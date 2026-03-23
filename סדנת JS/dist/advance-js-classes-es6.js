"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//exemple
var Person = /*#__PURE__*/function () {
  function Person(name, id) {
    _classCallCheck(this, Person);
    this._name = name;
    this.id = id;
    Person.personCounter++;
  }
  return _createClass(Person, [{
    key: "toString",
    value: function toString() {
      return "name: ".concat(this.name, ", id: ").concat(this.id);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }], [{
    key: "getPersonCount",
    value: function getPersonCount() {
      return this.personCounter;
    }
  }]);
}();
_defineProperty(Person, "personCounter", 0);
var noam = new Person('noam', '316525641');
console.log(noam.toString());
var Student = /*#__PURE__*/function (_Person2) {
  function Student(name, id, subject) {
    var _this;
    _classCallCheck(this, Student);
    _this = _callSuper(this, Student, [name, id]);
    _this.subject = subject;
    return _this;
  }
  _inherits(Student, _Person2);
  return _createClass(Student, [{
    key: "toString",
    value: function toString() {
      return _superPropGet(Student, "toString", this, 3)([]) + " subject: ".concat(this.subject);
    }
  }]);
}(Person);
var chen = new Student('chen', '7485734', "math");
console.log(chen.toString());

//drill 01
var Polygon = /*#__PURE__*/function () {
  function Polygon(name) {
    _classCallCheck(this, Polygon);
    this.name = name;
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    this.sideNum = rest.length;
    this.sides = [].concat(rest);
    var totalLength = this.circumference;
    for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
      var side = _rest[_i];
      if (side > totalLength - side || side <= 0) {
        this.name = 'Impossible Shape';
        this.sideNum = null;
        this.sides = null;
        break;
      }
    }
  }
  return _createClass(Polygon, [{
    key: "circumference",
    get: function get() {
      if (this.name === 'Impossible Shape') return null;
      return this.sides.reduce(function (acc, cor) {
        return acc + cor;
      }, 0);
    }
  }, {
    key: "area",
    get: function get() {
      return null;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.name === 'Impossible Shape') return 'this is Impossible Shape';else return "".concat(this.name, " have ").concat(this.sideNum, " sides");
    }
  }]);
}();
var Rectangle = /*#__PURE__*/function (_Polygon) {
  function Rectangle(length, width) {
    var _this2;
    _classCallCheck(this, Rectangle);
    _this2 = _callSuper(this, Rectangle, ["rectangle", length, length, width, width]);
    _this2.length = length;
    _this2.width = width;
    return _this2;
  }
  _inherits(Rectangle, _Polygon);
  return _createClass(Rectangle, [{
    key: "area",
    get: function get() {
      return this.length * this.width;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.name === 'Impossible Shape') return "Not a Rectangle";else return _superPropGet(Rectangle, "toString", this, 3)([]) + " and have length of ".concat(this.length, ", and width of ").concat(this.width);
    }
  }]);
}(Polygon);
var Square = /*#__PURE__*/function (_Rectangle) {
  function Square(length) {
    var _this3;
    _classCallCheck(this, Square);
    _this3 = _callSuper(this, Square, [length, length]);
    _this3.name = 'square';
    return _this3;
  }
  _inherits(Square, _Rectangle);
  return _createClass(Square, [{
    key: "toString",
    value: function toString() {
      if (this.name === 'Impossible Shape') return "Not a Square";else return "the Square have length of ".concat(this.length);
    }
  }]);
}(Rectangle);
var square = new Square(4);
console.log(square.toString());
var rectangle = new Rectangle(2, 6);
console.log(rectangle.toString());
var polygon = new Polygon("bad", 10, 1, 1);
console.log(polygon.toString());