import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CardsContextProvider from "./context/Cards";
import ToolbarContextProvider from "./context/Toolbar";
import ContextMenuContextProvider from "./context/ContextMenu";

ReactDOM.render(
  <React.StrictMode>
    <ToolbarContextProvider>
      <CardsContextProvider>
        <ContextMenuContextProvider>
          <App />
        </ContextMenuContextProvider>
      </CardsContextProvider>
    </ToolbarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
