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

const ToolbarContextProvider: FC = ({ children }) => {
  const [toolbarOpen, setToolbarOpen] = useState(false);

  return (
    <ToolbarContext.Provider value={{ toolbarOpen, setToolbarOpen }}>
      {children}
    </ToolbarContext.Provider>
  );
};

export default ToolbarContextProvider;
