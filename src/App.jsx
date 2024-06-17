import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Footer from "./views/Footer";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rent" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
