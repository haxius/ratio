import { ICard, ILedgerItem } from "../../models";

export type TCardsState = ICard[];

export interface ICardsStateActionPayload {
  index: number;
  itemIndex: number;
  item: ILedgerItem;
}

export type TCardsStateActionPayload =
  | ICardsStateActionPayload
  | number
  | ICard;

export interface ICardsStateAction {
  type: string;
  payload?: TCardsStateActionPayload;
}

export interface ICardsContext {
  cards: TCardsState;
  [key: string]: any;
}

export interface ICardsActions {
  [key: string]: any;
}
