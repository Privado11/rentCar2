import React, { useContext } from "react";
import "../styles/MainStyle.css";
import Card from "../components/Card";
import MenuBar from "./MenuBar";
import { useRentCar } from "../context/RentCarContext";

function Main() {
  const { cars } = useRentCar();

  return (
    <main className="main">
      <MenuBar />
      {cars.map((auto) => (
        <Card auto={auto} key={auto.id} />
      ))}
    </main>
  );
}

export default Main;
