import React, { createContext, FC, useContext, useReducer } from "react";
import Actions from "./actions";
import { ICardsContext } from "./models";
import Reducer from "./reducers";
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
  const [cards, dispatchCards] = useReducer(Reducer, DefaultState);

  const context = {
    cards,
  } as ICardsContext;

  for (let action in Actions) {
    context[action] = (...args: any) => Actions[action](dispatchCards, ...args);
  }

  return (
    <CardsContext.Provider value={context}>{children}</CardsContext.Provider>
  );
};

export default CardsContextProvider;
