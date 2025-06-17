import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Responsabilidad_Social">
      {" "}
      {/* Solo si estás en GitHub Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
