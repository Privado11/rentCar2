import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/MenuBar.css";
import { useRentCar } from "../context/RentCarContext";

function MenuBar() {
  const { salesBranch } = useRentCar();

  useEffect(() => {
    console.log(salesBranch[0]?.city?.name);
  }, [salesBranch]);

  function renderOpciones() {
    return (
      <>
        <option value="">Ciudades</option>
        {salesBranch.map((sales) => (
          <option
            className="options"
            value={sales?.city?.name}
            key={sales?.city?.id}
          >
            {sales?.city?.name}
          </option>
        ))}
      </>
    );
  }

  function handleFiltrar(event) {}

  function handleBorrar(event) {
    event.preventDefault();
  }

  return (
    <nav className="navBar">
      <form action="">
        <label>Ubicación:</label>
        <select name="locacion" id="">
          {renderOpciones()}
        </select>
        <label>Fecha Inicial:</label>
        <input type="date" name="fechaInicial" id="" />
        <label>Fecha Final:</label>
        <input type="date" name="fechaFinal" id="" />
        <button className="btnFiltro" onClick={handleFiltrar}>
          Filtrar
        </button>
        <button className="btnBorrarFiltro" onClick={handleBorrar}>
          Borrar filtro
        </button>
      </form>
    </nav>
  );
}

export { MenuBar };
