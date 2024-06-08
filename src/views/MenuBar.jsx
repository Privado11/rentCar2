import React, { useContext } from "react";
import "../styles/MenuBar.css";
import { contexto } from "../context/ContextoGeneral";

function MenuBar() {
  const {listaCiudades} = useContext(contexto);

  function renderOpciones(){
    return listaCiudades.map((ciudad,i)=>{
      return <option className="options" value={ciudad} key={i}>{ciudad}</option>
    })
  }

  return (
    <nav className="navBar">
      <form action="">
        <label>Locacion:</label>
        <select name="" id="">
          {renderOpciones()}
        </select>
        <label>Fecha Inicial:</label>
        <input type="date" name="" id="" />
        <label>Fecha Final:</label>
        <input type="date" name="" id="" />
        <button className="btnFiltro">Filtrar</button>
      </form>
    </nav>
  );
}

export default MenuBar;
