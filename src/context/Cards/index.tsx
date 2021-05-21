import React, { createContext, FC, useContext } from "react";
import CardsFuncs from "./functions";
import { CardsContextFuncs } from "./models";

export const CardsContext =
  createContext<CardsContextFuncs | undefined>(undefined);

export const useCardsContext = () => {
  const cardsContext = useContext(CardsContext);
  if (!cardsContext) {
    throw new Error(
      `useCardsContext must be used within a CardsContext Provider`
    );
  }
  return cardsContext;
};

const CardsContextProvider: FC = ({ children }) => (
  <CardsContext.Provider value={CardsFuncs}>{children}</CardsContext.Provider>
);

export default CardsContextProvider;
