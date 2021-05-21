import { ICard, ILedgerItem } from "../../models";
import { TCardsState } from "./models";

export const addCard = (state: TCardsState, newCard: ICard): TCardsState => [
  ...state,
  newCard,
];

export const removeCard = (state: TCardsState, index: number): TCardsState => {
  const newState = [...state];
  newState.splice(index, 1);
  return newState;
};

export const addLedgerItem = (
  state: TCardsState,
  index: number,
  item: ILedgerItem
): TCardsState => {
  const newState = [...state];
  newState[index].ledger.push(item);
  return newState;
};

export const overwriteLedgerItem = (
  state: TCardsState,
  index: number,
  itemIndex: number,
  item: ILedgerItem
): TCardsState => {
  const newState = [...state];
  newState[index].ledger[itemIndex] = item;
  return newState;
};

export const removeLedgerItem = (
  state: TCardsState,
  index: number,
  itemIndex: number
): TCardsState => {
  const newState = [...state];
  newState[index].ledger.splice(itemIndex, 1);
  return newState;
};

export const balanceLedger = (
  state: TCardsState,
  index: number
): TCardsState => {
  const newState = [...state];
  newState[index].ledger = [
    {
      amount: newState[index].ledger
        .map(({ amount }: ILedgerItem) => amount)
        .reduce((a: number, c: number) => a + c),
      note: "balanced",
    },
  ];
  return newState;
};

export const clearLedger = (state: TCardsState, index: number): TCardsState => {
  const newState = [...state];
  newState[index].ledger = [];
  return newState;
};
