"use strict";
exports.__esModule = true;
var react_1 = require("react");
var arrow_jpg_1 = require("../Assets/arrow.jpg");
var brenda_jpg_1 = require("../Assets/brenda.jpg");
var cooking_jpg_1 = require("../Assets/cooking.jpg");
var travel_jpg_1 = require("../Assets/travel.jpg");
var travel1_jpg_1 = require("../Assets/travel1.jpg");
var travel2_jpg_1 = require("../Assets/travel2.jpg");
require("../Stylings/home.css");
function Introduction() {
    var imageData = {
        brenda: brenda_jpg_1["default"],
        cooking: cooking_jpg_1["default"],
        travel: travel_jpg_1["default"],
        travel1: travel1_jpg_1["default"],
        travel2: travel2_jpg_1["default"]
    };
    var imageProcess = function () { };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { id: "introduction-wrapper" },
            react_1["default"].createElement("img", { src: arrow_jpg_1["default"], alt: "arrow" }),
            react_1["default"].createElement("img", { src: brenda_jpg_1["default"], alt: "profile picture erdi" }),
            react_1["default"].createElement("h1", null, "HI"),
            react_1["default"].createElement("p", null, "I am Erdi. Love creating user friendly, fun, responsive apps. I love travelling, cooking, gardening, road trips..."))));
}
exports["default"] = Introduction;
