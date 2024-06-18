import React from "react";
import "../styles/Home.css";
import Search from "./Search";

function Home() {
  return (
    <main className="container-home">
      <section className="container-home-section">
        <div className="home__text-container">
          <h1 className="home__title">Lamborghini Aventador</h1>
          <p className="home__text">Para renta. $210000.00 por día.</p>
          <button className="home__button">Reserva ahora</button>
        </div>
        <div className="container-search">
          <Search />
        </div>
      </section>
      <section className="container-home-section">
        {/* Contenido de la segunda sección */}
      </section>
    </main>
  );
}

export { Home };
