import React, { createContext, useEffect, useRef, useState } from "react";
import { getData } from "./api/getData";
import { postDato } from "./api/postDato";

export const contexto = createContext();

function ContextoGeneral({ children }) {
  const [listaAutos, setListaAutos] = useState(null);
  const [listaAutosRentados, setListaAutosRentados] = useState(null);
  const [listaAutosFiltrados, setListaAutosFiltrados] = useState(null);
  const [listaCiudades, setListaCiudades] = useState(null);
  const [autoRentar, setAutoRentar] = useState();
  const [filtroActual, setFiltroActual] = useState({
    locacion: "Bogotá",
    fechaI: "2024-05-01T10:30:00",
    fechaF: "2024-06-01T10:30:00",
  });
  const [rentaActual, setRentaActual] = useState(null);

  const urlBase = "https://rentcar-production.up.railway.app/api/v1";

  useEffect(() => {
    getData("cars", urlBase, setListaAutos);
    getData("rents", urlBase, setListaAutosRentados);
    getData("cities", urlBase, setListaCiudades);
  }, []);

  function verificacion(formulario) {
    for (const key in formulario) {
      if (formulario.hasOwnProperty(key) && formulario[key] === "") {
        return false;
      }
    }
    return true;
  }

  function filtrarAutos(filtros) {
    const { locacion, fechaInicial, fechaFinal } = filtros;
    let listado = [];
    if (locacion == "Ciudades") {
      setListaAutosFiltrados(listaAutos);
      return null;
    }
    if (locacion != "" && fechaInicial == "") {
      listaAutos.map((auto) => {
        if (auto.city.name == locacion) {
          listado.push(auto);
        }
      });
      setListaAutosFiltrados([...listado]);
    }
  }

  function conversionFecha(fecha) {
    const fechaNew = new Date(fecha).toISOString();
    return fechaNew.slice(0, -5);
  }

  function getIdCiudad(ciudad) {
    const ciudadEncontrada = listaCiudades.find((c) => c.name == ciudad);
    return ciudadEncontrada ? ciudadEncontrada.id : "no";
  }

  return (
    <contexto.Provider
      value={{
        listaAutos,
        setListaAutos,
        listaCiudades,
        setListaCiudades,
        rentaActual,
        setRentaActual,
        urlBase,
        filtroActual,
        setFiltroActual,
        listaAutosFiltrados,
        setListaAutosFiltrados,
        filtrarAutos,
        listaAutosRentados,
        setListaAutosRentados,
        autoRentar,
        getData,
        setAutoRentar,
        verificacion,
        getIdCiudad,
        conversionFecha,
        postDato,
      }}
    >
      {children}
    </contexto.Provider>
  );
}

export default ContextoGeneral;
