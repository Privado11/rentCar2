import React from "react";
import { Link } from "react-router-dom";
import { GiCarWheel, GiPadlock } from "react-icons/gi";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <span className="header__logo-img" alt="logo">
              <GiCarWheel />
            </span>
          </div>
          <div className="header-logo-container-text">
            <h2 className="header__logo-text">Royal cars</h2>
            <p className="header__logo-slogan">Rent a car</p>
          </div>
          <div className="header-lock">
            <span className="header__logo-lock">
              <GiPadlock className="img-lock" />
              <p className="text-lock">Login</p>
            </span>
          </div>
        </div>

        <div className="header__navbar">
          <ul className="header__navBar-menu">
            <li>
              <Link to="Home" smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true}>
                About us
              </Link>
            </li>
            <li>
              <Link to="Projects" smooth={true}>
                Vehicles
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true}>
                Contac us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export { Header };
