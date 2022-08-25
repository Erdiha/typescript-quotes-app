import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const handleClick = (event: any) => {
    const burgerButton = document.querySelector('.hamburger-wrapper')!;
    const navMenu = document.querySelector('.nav-menu')!;
    //console.log('clicked');
    navMenu && navMenu.classList.toggle('active');
    burgerButton && burgerButton.classList.toggle('active');
  };
  return (
    <nav className="navbar-wrapper">
      <a href="#" className="nav-brand">
        E.H.
      </a>
      <ul className="nav-menu" onClick={handleClick}>
        <li className="nav-item">
          <a href="#introduction">Home</a>
        </li>
        <li className="nav-item">
          <a href="#quotes">Quotes</a>
        </li>
      </ul>
      <div onClick={handleClick} className="hamburger-wrapper">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Header;
