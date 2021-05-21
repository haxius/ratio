import { ICard, ILedgerItem } from "../../models";

export interface CardsContextFuncs {
  getCards: () => ICard[];
  addCard: (card: ICard) => any;
  removeCard: (index: number) => any;
  addLedgerItem: (index: number, item: ILedgerItem) => any;
  overwriteLedgerItem: (
    index: number,
    itemIndex: number,
    item: ILedgerItem
  ) => any;
  removeLedgerItem: (index: number, itemIndex: number) => any;
  balanceLedger: (index: number) => any;
  clearLedger: (index: any) => any;
}
