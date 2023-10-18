import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./Movie/MovieStyles.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
