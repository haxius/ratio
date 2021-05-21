import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CardsContextProvider from "./context/Cards";

ReactDOM.render(
  <React.StrictMode>
    <CardsContextProvider>
      <App />
    </CardsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
