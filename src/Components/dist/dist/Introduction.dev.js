"use strict";

exports.__esModule = true;

var react_1 = require("react");

require("../Stylings/home.css");

function Introduction() {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    id: "introduction-wrapper"
  }, react_1["default"].createElement("h1", null, "HI"), react_1["default"].createElement("p", null, "I am Erdi. Love creating user friendly, fun, responsive apps. I love travelling, cooking, gardening, road trips..."), react_1["default"].createElement("img", {
    src: "../Assets/brenda.jpg",
    alt: "profile picture erdi"
  })), ";");
}

exports["default"] = Introduction;