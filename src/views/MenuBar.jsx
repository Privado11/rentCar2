import React, { useContext, useState } from "react";
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

  const [locacion, setLocacion] = useState("");
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

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
    if (locacion !== "") {
      const valor = { locacion, fechaInicial, fechaFinal };
      const verificacionForm = verificacion(valor);
      if (verificacionForm) {
        const cityID = getIdCiudad(locacion);
        const fechaI = conversionFecha(fechaInicial);
        const fechaF = conversionFecha(fechaFinal);
        const endPoint = `cars/availables?cityId=${cityID}&startDate=${fechaI}&endDate=${fechaF}`;
        getData(endPoint, urlBase, setListaAutosFiltrados);
        setFiltroActual({ locacion, fechaI, fechaF });
      }
    }
  }

  function handleBorrar() {
    setLocacion("");
    setFechaInicial("");
    setFechaFinal("");
    setListaAutosFiltrados(null);
    setFiltroActual({});
  }

  return (
    <nav className="navBar">
      <form action="">
        <label>Ubicación:</label>
        <select
          name="locacion"
          value={locacion}
          onChange={(e) => setLocacion(e.target.value)}
        >
          {renderOpciones()}
        </select>
        <label>Fecha Inicial:</label>
        <input
          type="date"
          name="fechaInicial"
          value={fechaInicial}
          onChange={(e) => setFechaInicial(e.target.value)}
        />
        <label>Fecha Final:</label>
        <input
          type="date"
          name="fechaFinal"
          value={fechaFinal}
          onChange={(e) => setFechaFinal(e.target.value)}
        />
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
