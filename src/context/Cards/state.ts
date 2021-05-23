import { ICard, ILedgerItem } from "../../models";

const DefaultState = [
  {
    name: "QUICKSILVER",
    use: "Goods & Groceries",
    limit: 1750.0,
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
        amount: 1.29,
        note: "Bananas Again",
      } as ILedgerItem,
      {
        amount: 23.95,
        note: "Steak",
      } as ILedgerItem,
      {
        amount: 2.23,
        note: "Pear",
      } as ILedgerItem,
      {
        amount: 1.29,
        note: "Bananas",
      } as ILedgerItem,
      {
        amount: 1.29,
        note: "Bananas Again",
      } as ILedgerItem,
      {
        amount: 23.95,
        note: "Steak",
      } as ILedgerItem,
      {
        amount: 23.95,
        note: "Steak",
      } as ILedgerItem,
      {
        amount: 2.23,
        note: "Pear",
      } as ILedgerItem,
      {
        amount: 1.29,
        note: "Bananas",
      } as ILedgerItem,
      {
        amount: 1.29,
        note: "Bananas Again",
      } as ILedgerItem,
      {
        amount: 23.95,
        note: "Steak",
      } as ILedgerItem,
    ],
  } as ICard,
];

export default DefaultState;
