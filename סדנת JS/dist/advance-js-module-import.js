"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var utils = _interopRequireWildcard(require("./advance-js-module-export.js"));
var _lodash = _interopRequireDefault(require("lodash"));
require("./advance-js-module-run.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
//exemple
// import{sum,multi}from './advance-js-module-export.js';

// console.log(sum(3,4));
// console.log(multi(5,6));

console.log(utils.sum(3, 4));
console.log(utils.multi(5, 6));

//exemple 2
var arr1 = [{
  name: 'moshe',
  id: "o85u23489"
}, {
  name: 'yair',
  id: "lkdrgersl"
}, {
  name: 'michal',
  id: ",nfvdsjkn"
}];
var arr2 = _lodash["default"].cloneDeep(arr1);
arr2[0].name = 'moshik';
console.log(arr1[0]);
console.log(arr2[0]);

//exemple 3
console.log(utils.getSpecialNumber());

//exemple 4