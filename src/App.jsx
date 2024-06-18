import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Footer from "./views/Footer";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { useRentCar } from "./context/RentCarContext";
import { Main } from "./views/Main";
import { Header } from "./views/Header";
import { Home } from "./views/Home";

function App() {
  const { user } = useRentCar();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/rent" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
