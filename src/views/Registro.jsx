import React from "react";
import "../styles/RegistroStyle.css";

function Registro() {
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
        <form action="" className="formulario">
          <h2>Registro de Usuario</h2>

          <input type="text" placeholder="Nombre completo" />

          <input type="text" placeholder="Apellido completo" />

          <input type="text" placeholder="Cedula de ciudadania" />

          <input type="text" placeholder="Dirección" />

          <input type="text" placeholder="Telefono" />
          <button>Rentar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
