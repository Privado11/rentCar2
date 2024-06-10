import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextoGeneral from "./context/ContextoGeneral";
import "./styles/App.css";
import Header from "./views/Header";
import Main from "./views/Main";
import MenuBar from "./views/MenuBar";
import Registro from "./views/Registro";
import Footer from "./views/Footer";
import Renta from "./views/Renta";

function App() {
  return (
    <>
      <ContextoGeneral>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={Main}/>
            <Route path="/registro" Component={Registro}/>
            <Route path="/rent" Component={Renta}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ContextoGeneral>
    </>
  );
}

export default App;
