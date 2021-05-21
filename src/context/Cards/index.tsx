import React, { createContext, FC, useContext, useReducer } from "react";
import { ICardsContext } from "./models";
import Reducer from "./reducer";
import DefaultState from "./state";

export const CardsContext = createContext<ICardsContext | undefined>(undefined);

export const useCardsContext = () => {
  const cardsContext = useContext(CardsContext);
  if (!cardsContext) {
    throw new Error(
      `useCardsContext must be used within a CardsContext Provider`
    );
  }
  return cardsContext;
};

const CardsContextProvider: FC = ({ children }) => {
  const [cardsState, dispatchCards] = useReducer(Reducer, DefaultState);

  return (
    <CardsContext.Provider value={{ cardsState, dispatchCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
