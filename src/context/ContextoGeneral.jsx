import React, { createContext, useState } from 'react'
import { autos } from './api/listAutos';
import {ciudades} from './api/listaCiudades';

export const contexto = createContext();

function ContextoGeneral({children}) {
  const [listaAutos,setListaAutos] = useState(autos);
  const [listaCiudades,setListaCiudades] = useState(ciudades);

  

  return (
    <contexto.Provider value={{
        listaAutos,setListaAutos,listaCiudades,setListaCiudades
      }}>
        {children}
    </contexto.Provider>
  )
}

export default ContextoGeneral