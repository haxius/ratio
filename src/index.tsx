import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CardsContextProvider from "./context/Cards";
import ToolbarContextProvider from "./context/Toolbar";

ReactDOM.render(
  <React.StrictMode>
    <ToolbarContextProvider>
      <CardsContextProvider>
        <App />
      </CardsContextProvider>
    </ToolbarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
