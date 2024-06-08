import React from "react";
import "../styles/HeaderStyle.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <div className="containerSobreHeader">
        <div className="containerHeader">
          <p className="logo">RentCar</p>
          <nav className="navHeader">
            <ul>
              <li className="btnNavegacion">
                <Link className="link" to={'/'} id="">Inicio</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="presentacion">
          <p className="tituloPresentacion">
            El auto de tus sueños te esta esperando
          </p>
          <p className="subPresentacion">
            Mas informacion
            <FaArrowRight />
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
