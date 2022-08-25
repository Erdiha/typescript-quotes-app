"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("./Components/Footer");
var Header_1 = require("./Components/Header");
var Home_1 = require("./Components/Home");
require("./Stylings/app.css");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { id: "navbar" },
            react_1["default"].createElement(Header_1["default"], null)),
        react_1["default"].createElement("div", { id: "home" },
            react_1["default"].createElement(Home_1["default"], null)),
        react_1["default"].createElement("footer", { id: "footer" },
            react_1["default"].createElement(Footer_1["default"], null))));
}
exports["default"] = App;
