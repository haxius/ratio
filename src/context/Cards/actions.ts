import { ICard, ILedgerItem } from "../../models";
import { ICardsActions } from "./models";

export const addCard = (dispatch: any, card: ICard): void => {
  dispatch({ type: "ADD_CARD", payload: card });
};

export const removeCard = (dispatch: any, index: number): void => {
  dispatch({ type: "REMOVE_CARD", payload: index });
};

export const addLedgerItem = (
  dispatch: any,
  index: number,
  item: ILedgerItem
): void => {
  dispatch({ type: "ADD_LEDGER_ITEM", payload: { index, item } });
};

export const overwriteLedgerItem = (
  dispatch: any,
  index: number,
  itemIndex: number,
  item: ILedgerItem
): void => {
  dispatch({
    type: "OVERWRITE_LEDGER_ITEM",
    payload: { index, itemIndex, item },
  });
};

export const removeLedgerItem = (
  dispatch: any,
  index: number,
  itemIndex: number
): void => {
  dispatch({
    type: "REMOVE_LEDGER_ITEM",
    payload: { index, itemIndex },
  });
};

export const balanceLedger = (dispatch: any, index: number): void => {
  dispatch({ type: "BALANCE_LEDGER", payload: index });
};

export const clearLedger = (dispatch: any, index: number): void => {
  dispatch({ type: "CLEAR_LEDGER", payload: index });
};

export default {
  addCard,
  removeCard,
  addLedgerItem,
  overwriteLedgerItem,
  removeLedgerItem,
  balanceLedger,
  clearLedger,
} as ICardsActions;
