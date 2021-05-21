import { ICard, ILedgerItem } from "../../models";
import { CardsContextFuncs } from "./models";

let cards: ICard[] = [
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
  },
];

const getCards = (): ICard[] => cards;

const addCard = (card: ICard): any => {
  cards.push(card);
};

const removeCard = (index: number): any => {
  if (!cards[index]) {
    return;
  }

  cards.splice(index, 1);
};

const addLedgerItem = (index: number, item: ILedgerItem): any => {
  if (!cards[index]) {
    return;
  }

  cards[index].ledger.push(item);
};

const overwriteLedgerItem = (
  index: number,
  itemIndex: number,
  item: ILedgerItem
): any => {
  if (!cards[index]) {
    return;
  }

  cards[index].ledger[itemIndex] = item;
};

const removeLedgerItem = (index: number, itemIndex: number): any => {
  cards[index].ledger.splice(itemIndex, 1);
};

const balanceLedger = (index: number): any => {
  if (!cards[index].ledger) cards[index].ledger = [];

  cards[index].ledger = [
    {
      amount: cards[index].ledger
        .map(({ amount }: ILedgerItem) => amount)
        .reduce((a: number, c: number) => a + c),
      note: "balanced",
    },
  ];
};

const clearLedger = (index: number): any => {
  cards[index].ledger = [];
};

export default {
  getCards,
  addCard,
  removeCard,
  addLedgerItem,
  overwriteLedgerItem,
  removeLedgerItem,
  balanceLedger,
  clearLedger
} as CardsContextFuncs;
