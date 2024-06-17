import React, { useEffect } from "react";
import Card from "../components/Card";
import { useRentCar } from "../context/RentCarContext";
import { MenuBar } from "./MenuBar";
import "../styles/MainStyle.css";

function Main() {
  const { cars, getCarsAvailables } = useRentCar();
  useEffect(() => {
    console.log(cars);
  }, [cars]);

  useEffect(() => {
    getCarsAvailables();
  }, []);

  return (
    <main className="main">
      <MenuBar />
      {cars.map((car) => (
        <Card car={car} key={car.id} />
      ))}
    </main>
  );
}

export { Main };
