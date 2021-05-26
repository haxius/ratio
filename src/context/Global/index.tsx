import React, { FC } from "react";
import CardsContextProvider from "../Cards";
import ContextMenuContextProvider from "../ContextMenu";
import ToolbarContextProvider from "../Toolbar";

interface GlobalContextProps {
  children: any;
}

const GlobalContext: FC<GlobalContextProps> = ({ children }) => (
  <ToolbarContextProvider>
    <CardsContextProvider>
      <ContextMenuContextProvider>{children}</ContextMenuContextProvider>
    </CardsContextProvider>
  </ToolbarContextProvider>
);

export default GlobalContext;
