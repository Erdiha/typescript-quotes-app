"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("react");

require("../Stylings/home.css");

var Introduction_1 = require("./Introduction");

var Quotes_1 = require("./Quotes");

var Home = function Home() {
  var _a = react_1.useState(),
      temp = _a[0],
      setTemp = _a[1];

  var datas = {
    name: 'erdi',
    text: 'haciogullari'
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "sections intro"
  }, react_1["default"].createElement(Introduction_1["default"], null)), react_1["default"].createElement("div", {
    className: "sections quotes "
  }, react_1["default"].createElement(Quotes_1["default"], __assign({}, datas))), react_1["default"].createElement("div", {
    className: "sections "
  }, "C"), react_1["default"].createElement("div", {
    className: "sections "
  }, "D"), react_1["default"].createElement("div", {
    className: "sections "
  }, "E"));
};

exports["default"] = Home;