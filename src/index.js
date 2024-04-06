import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//! App bileşenine yazdığımız kodların html'i hangi kısmının ekrana basılacağını belirler.
const root = ReactDOM.createRoot(document.getElementById("root"));

//! App bileşenini html'deki root alanına aktarır.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
