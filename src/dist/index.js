"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
require("./Stylings/app.css");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(App_1["default"], null));
