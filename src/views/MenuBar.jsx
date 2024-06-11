import React, { useContext, useRef, useState } from "react";
import "../styles/MenuBar.css";
import { contexto } from "../context/ContextoGeneral";

function MenuBar() {
  const {
    listaCiudades,
    urlBase,
    verificacion,
    getData,
    getIdCiudad,
    setListaAutosFiltrados,
    conversionFecha,
    setFiltroActual,
  } = useContext(contexto);

  function renderOpciones() {
    if (listaCiudades != null) {
      return (
        <>
          <option value="">Ciudades</option>
          {listaCiudades.map((ciudad) => (
            <option className="options" value={ciudad.name} key={ciudad.id}>
              {ciudad.name}
            </option>
          ))}
        </>
      );
    }
    return <option value="">Ciudades</option>;
  }

  function handleFiltrar(event) {
    event.preventDefault();
    const valor = Object.fromEntries(new window.FormData(event.target.form));
    if (valor.locacion !== "Ciudades") {
      const verificacionForm = verificacion(valor);
      if (verificacionForm) {
        const cityID = getIdCiudad(valor.locacion);
        const fechaI = conversionFecha(valor.fechaInicial);
        const fechaF = conversionFecha(valor.fechaFinal);
        const endPoint = `cars/availables?cityId=${cityID}&startDate=${fechaI}&endDate=${fechaF}`;
        getData(endPoint, urlBase, setListaAutosFiltrados);
        let locacion = valor.locacion;
        setFiltroActual({ locacion, fechaI, fechaF });
      }
    }
  }

  function handleBorrar(event) {
    event.preventDefault();

    setListaAutosFiltrados(null);
    setFiltroActual({});
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

export default MenuBar;
