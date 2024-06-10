import React, { useContext, useRef, useState } from "react";
import "../styles/MenuBar.css";
import { contexto } from "../context/ContextoGeneral";

function MenuBar() {
  const {listaCiudades,urlBase,verificacion,getData,getIdCiudad,setListaAutosFiltrados,
    conversionFecha, setFiltroActual
  } = useContext(contexto);
  

  function renderOpciones(){
    if(listaCiudades!=null){
      return listaCiudades.map((ciudad,i)=>{
        return <option className="options" value={ciudad.name} key={ciudad.id}>{ciudad.name}</option>
      })
    }
  }

  function handleClick(event){
    event.preventDefault();
    const valor = Object.fromEntries(
      new window.FormData(event.target)
    )
    if(valor.locacion != 'Ciudades'){
      const verificacionForm = verificacion(valor);
      if(verificacionForm){
        const cityID = getIdCiudad(valor.locacion);
        const fechaI = conversionFecha(valor.fechaInicial);
        const fechaF = conversionFecha(valor.fechaFinal);
        const endPoint = `cars/availables?cityId=${cityID}&startDate=${fechaI}&endDate=${fechaF}`
        getData(endPoint,urlBase,setListaAutosFiltrados);
        let locacion = valor.locacion
        setFiltroActual({locacion,fechaI,fechaF});
      }
    } 
  }



  return (
    <nav className="navBar">
      <form action="" onSubmit={handleClick}>
        <label>Locacion:</label>
        <select name="locacion" id="">
          {renderOpciones()}
        </select>
        <label>Fecha Inicial:</label>
        <input type="date" name="fechaInicial" id="" />
        <label>Fecha Final:</label>
        <input type="date" name="fechaFinal" id="" />
        <button className="btnFiltro">Filtrar</button>
      </form>
    </nav>
  );
}

export default MenuBar;
