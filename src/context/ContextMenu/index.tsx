import React, { createContext, FC, useContext, useState } from "react";
import { IContextMenuContext } from "./models";

export const ContextMenuContext =
  createContext<IContextMenuContext | undefined>(undefined);

export const useContextMenuContext = () => {
  const contextMenuContext = useContext(ContextMenuContext);
  if (!contextMenuContext) {
    throw new Error(
      `useContextMenuContext must be used within a ContextMenuContext Provider`
    );
  }
  return contextMenuContext;
};

const ContextMenuContextProvider: FC = ({ children }) => {
  const [contextMenuOpen, setContextMenuOpen] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<boolean | number>(false);

  const clearCardIndex = () => setCardIndex(false);

  const clearAndCloseContextMenu = () => {
    setContextMenuOpen(false);
    clearCardIndex();
  };

  return (
    <ContextMenuContext.Provider
      value={{
        contextMenuOpen,
        setContextMenuOpen,
        cardIndex,
        setCardIndex,
        clearCardIndex,
        clearAndCloseContextMenu,
      }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
};

export default ContextMenuContextProvider;
