import React, { createContext, useContext, useState } from "react";
import { ApiRentCar } from "../service/ApiRentCar";

const RentCarContext = createContext();

const useRentCar = () => useContext(RentCarContext);

const RentCarProvider = ({ children }) => {
  const rentCar = ApiRentCar();

  return (
    <RentCarContext.Provider value={rentCar}>
      {children}
    </RentCarContext.Provider>
  );
};

export { useRentCar, RentCarProvider };
