import React, { useContext, useState } from "react";
import "../styles/RegistroStyle.css";
import { contexto } from "../context/ContextoGeneral";
import { Link,useNavigate } from "react-router-dom";

function Registro() {
  let history = useNavigate();
  const { verificacion, postDato, urlBase, filtroActual, autoRentar, setRentaActual } =
    useContext(contexto);

  // Función principal para manejar el evento de envío del formulario
  async function handleSubmit(event) {
    event.preventDefault();

    // Obtiene los valores del formulario y los convierte a un objeto
    const valores = obtenerValoresFormulario(event.target);

    // Verifica si los valores del formulario cumplen con los criterios
    const activo = verificacion(valores);
    if (activo) {
      console.log(valores);
      // Envía los datos del usuario al servidor
      const user = await postDato("users", urlBase, valores);
      console.log(user)
      // Crea el objeto con los datos de la renta
      const datosRenta = crearDatosRenta(user.id);
      // Envía los datos de la renta al servidor
      const rent = postDato("rents", urlBase, datosRenta);
      console.log(rent)
      setRentaActual({...rent,...user,...autoRentar});
      history("/rent");
    }
  }

  // Función para obtener los valores del formulario
  function obtenerValoresFormulario(form) {
    return Object.fromEntries(new window.FormData(form));
  }

  // Función para crear los datos de la renta
  function crearDatosRenta(userId) {
    return {
      startDate: filtroActual.fechaI,
      endDate: filtroActual.fechaF,
      totalPrice: autoRentar.price,
      user: {id:userId},
      car: {id:autoRentar.id},
    };
  }

  return (
    <div className="containerRegistro">
      <h1>RentaCar</h1>
      <div className="section">
        <div className="mensajes">
          <div className="containerMensaje">
            <h2>Renta tu priemer auto con RentCar</h2>
            <p>siempre al alcance de tus sueños</p>
          </div>
        </div>
        <form action="" className="formulario" onSubmit={handleSubmit}>
          <h2>Registro de Usuario</h2>
          <input type="text" name="name" placeholder="Nombre completo" />
          <input type="text" name="lastName" placeholder="Apellido completo" />
          <input type="text" name="idCard" placeholder="Cedula de ciudadania" />
          <input type="text" name="address" placeholder="Dirección" />
          <input type="text" name="phone" placeholder="Telefono" />
          <button className="btnActivo">
            Rentar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
