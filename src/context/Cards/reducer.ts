import DefaultState from "./state";
import * as Actions from "./actions";
import { ICard } from "../../models";
import { ICardsStateAction, ICardsStateActionPayload } from "./models";

const Reducer = (state = DefaultState, action: ICardsStateAction) => {
  const { index, itemIndex, item } =
    (action.payload as ICardsStateActionPayload) || {};

  switch (action.type) {
    case "ADD_CARD":
      return Actions.addCard(state, action.payload as ICard);
    case "REMOVE_CARD":
      return Actions.removeCard(state, action.payload as number);
    case "ADD_LEDGER_ITEM":
      return Actions.addLedgerItem(state, index, item);
    case "OVERWRITE_LEDGER_ITEM":
      return Actions.overwriteLedgerItem(state, index, itemIndex, item);
    case "REMOVE_LEDGER_ITEM":
      return Actions.removeLedgerItem(state, index, itemIndex);
    case "BALANCE_LEDGER":
      return Actions.balanceLedger(state, action.payload as number);
    case "CLEAR_LEDGER":
      return Actions.clearLedger(state, action.payload as number);
    default:
      return state;
  }
};

export default Reducer;
