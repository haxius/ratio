import React, { FC } from "react";
import { ICard } from "../models";
import LedgerEntry from "./LedgerItem";

interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card: { name, use = "", limit, ledger } }) => (
  <div>
    <header>
      <h1>{name}</h1>
      {use ? <h4>Use: {use}</h4> : <React.Fragment />}
    </header>
    <p>
      Balance:{" "}
      {ledger
        .map(({ amount }) => amount)
        .reduce((a, c) => a + c)
        .toFixed(2)}
    </p>
    <p>Limit: {limit}</p>
    <div>
      {ledger.map((item, index) => (
        <LedgerEntry key={`${name}-${index}`} item={item} />
      ))}
    </div>
  </div>
);

export default Card;
