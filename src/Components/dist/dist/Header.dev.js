"use strict";

exports.__esModule = true;

var react_1 = require("react"); //import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  var handleClick = function handleClick(event) {
    var burgerButton = document.querySelector('.hamburger-wrapper');
    var navMenu = document.querySelector('.nav-menu');
    console.log('clicked');
    navMenu && navMenu.classList.toggle('active');
    burgerButton && burgerButton.classList.toggle('active');
  };

  return react_1["default"].createElement("nav", {
    className: "navbar-wrapper"
  }, react_1["default"].createElement("a", {
    href: "#",
    className: "nav-brand"
  }, "ICON"), react_1["default"].createElement("ul", {
    className: "nav-menu"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    href: ""
  }, "Home")), react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    href: ""
  }, "About")), react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    href: ""
  }, "Contact"))), react_1["default"].createElement("div", {
    onClick: handleClick,
    className: "hamburger-wrapper"
  }, react_1["default"].createElement("span", {
    className: "bar"
  }), react_1["default"].createElement("span", {
    className: "bar"
  }), react_1["default"].createElement("span", {
    className: "bar"
  })));
}

exports["default"] = Header;