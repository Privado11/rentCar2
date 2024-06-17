import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { RentCarProvider } from "./context/RentCarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RentCarProvider>
      <App />
    </RentCarProvider>
  </React.StrictMode>
);
