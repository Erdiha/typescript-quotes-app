"use strict";

exports.__esModule = true;

var react_1 = require("react");

var Quotes = function Quotes(datas) {
  var name = datas.name,
      text = datas.text;
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("h1", null, name, text));
};

exports["default"] = Quotes;