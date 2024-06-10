import React, { useContext } from "react";
import "../styles/MainStyle.css";
import Card from "../components/Card";
import MenuBar from "./MenuBar";
import { contexto } from "../context/ContextoGeneral";

function Main() {
  const {listaAutos, listaAutosFiltrados} =
    useContext(contexto);
  function renderAutos() {
    if (listaAutosFiltrados == null && listaAutos != null) {
      return listaAutos.map((auto) => {
        return <Card auto={auto} key={auto.id} />;
      });
    } else if(listaAutosFiltrados != null && listaAutosFiltrados.length > 0) {
      return listaAutosFiltrados.map((auto) => {
        return <Card auto={auto} key={auto.id} />;
      });
    }
  }
  return (
    <main className="main">
      <MenuBar />
      {renderAutos()}
    </main>
  );
}

export default Main;
