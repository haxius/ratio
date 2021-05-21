export interface ILedgerItem {
  amount: number;
  note: string;
}

export interface ICard {
  name: string;
  use: string;
  limit: number;
  ledger: ILedgerItem[];
}
