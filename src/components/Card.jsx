import React, { useContext } from "react";
import "../styles/CardStyle.css";
import { Link } from "react-router-dom";
import imgcar from "../assets/model-3.avif";

function Card({ car }) {
  const { brand, model, year, price, salesBranch, id } = car;

  function handleClick() {
    setcarRentar(car);
  }

  return (
    <div className="card">
      <div className="contenedorImagen">
        <img src="" alt="imagen de car" />
      </div>
      <h2>{brand}</h2>
      <p>
        {model} {year}
      </p>
      <span>{salesBranch?.city.name}</span>
      <span key={1}>${price}</span>
      <button onClick={handleClick}>
        <Link to={"registro"} className="linkCard">
          Rentar
        </Link>
      </button>
    </div>
  );
}

export default Card;
