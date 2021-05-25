import React, { createContext, FC, useContext, useState } from "react";
import { IToolbarContext } from "./models";

export const ToolbarContext =
  createContext<IToolbarContext | undefined>(undefined);

export const useToolbarContext = () => {
  const toolbarContext = useContext(ToolbarContext);
  if (!toolbarContext) {
    throw new Error(
      `useToolbarContext must be used within a ToolbarContext Provider`
    );
  }
  return toolbarContext;
};

export const defaultAmount = "";
export const defaultNote = "ADD NOTE?";

const ToolbarContextProvider: FC = ({ children }) => {
  const [toolbarOpen, setToolbarOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState<number | boolean>(false);
  const [note, setNote] = useState(defaultNote);
  const [amount, setAmount] = useState(defaultAmount);
  const clearNote = () => setNote(defaultNote);
  const clearAmount = () => setAmount(defaultAmount);
  const clearItemIndex = () => setItemIndex(false);

  const clearAndCloseToolbar = () => {
    clearNote();
    clearAmount();
    clearItemIndex();
    setToolbarOpen(false);
  };

  return (
    <ToolbarContext.Provider
      value={{
        toolbarOpen,
        setToolbarOpen,
        itemIndex,
        setItemIndex,
        clearItemIndex,
        note,
        setNote,
        clearNote,
        amount,
        setAmount,
        clearAmount,
        clearAndCloseToolbar,
      }}
    >
      {children}
    </ToolbarContext.Provider>
  );
};

export default ToolbarContextProvider;
