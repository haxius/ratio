import { ICard, ILedgerItem } from "../../models";
import {
  ICardsStateAction,
  ICardsStateActionPayload,
  TCardsState,
} from "./models";
import DefaultState from "./state";

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
  newState[index].ledger.unshift(item);
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
      amount: newState[index].ledger.length
        ? newState[index].ledger
            .map(({ amount }: ILedgerItem) => amount)
            .reduce((a: number, c: number) => a + c)
        : 0,
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

const Reducer = (state = DefaultState, action: ICardsStateAction) => {
  const { index, itemIndex, item } =
    (action.payload as ICardsStateActionPayload) || {};

  switch (action.type) {
    case "ADD_CARD":
      return addCard(state, action.payload as ICard);
    case "REMOVE_CARD":
      return removeCard(state, action.payload as number);
    case "ADD_LEDGER_ITEM":
      return addLedgerItem(state, index, item);
    case "OVERWRITE_LEDGER_ITEM":
      return overwriteLedgerItem(state, index, itemIndex, item);
    case "REMOVE_LEDGER_ITEM":
      return removeLedgerItem(state, index, itemIndex);
    case "BALANCE_LEDGER":
      return balanceLedger(state, action.payload as number);
    case "CLEAR_LEDGER":
      return clearLedger(state, action.payload as number);
    default:
      return state;
  }
};

export default Reducer;
