import { ICard, ILedgerItem } from "../../models";

const DefaultState = [
  {
    name: "Some Card",
    use: "Groceries",
    limit: 1250.0,
    ledger: [
      {
        amount: 2.23,
        note: "Pear",
      } as ILedgerItem,
      {
        amount: 1.29,
        note: "Bananas",
      } as ILedgerItem,
      {
        amount: 9.95,
        note: "Steak",
      } as ILedgerItem,
    ],
  } as ICard,
];

export default DefaultState;
