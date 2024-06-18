import React, { useContext } from "react";
import "../styles/CardStyle.css";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
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
      <span key={1}>
        <NumericFormat
          value={price}
          displayType={"text"}
          npm
          install
          react-number-format
          thousandSeparator={true}
          prefix={"$"}
          decimalScale={2}
          fixedDecimalScale
        />
      </span>
      <button onClick={handleClick}>
        <Link to={"registro"} className="linkCard">
          Rentar
        </Link>
      </button>
    </div>
  );
}

export default Card;
