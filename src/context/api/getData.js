import React, { useContext } from "react";
import { contexto } from "../ContextoGeneral";
import axios from "axios";

export async function getData(endPoint,urlBase,set){
    try {
        const datos = await axios.get(`${urlBase}/${endPoint}`);
        set(datos.data);
      } catch (error) {
        console.error(error)
        throw new Error("No se encontró la lista de autos");
      }
}

