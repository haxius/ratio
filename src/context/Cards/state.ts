import { ICard } from "../../models";

const DefaultState = [
  {
    name: "Some Card",
    use: "Groceries",
    limit: 1250.0,
    ledger: [
      {
        amount: 2.23,
        note: "Pear",
      },
      {
        amount: 1.29,
        note: "Bananas",
      },
      {
        amount: 9.95,
        note: "Steak",
      },
    ],
  } as ICard,
];

export default DefaultState;
