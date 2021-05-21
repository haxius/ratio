import React, { FC } from "react";
import { ILedgerItem } from "../models";

interface LedgerItemProps {
  item: ILedgerItem;
}

const LedgerEntry: FC<LedgerItemProps> = ({ item: { amount, note = "" } }) => (
  <div>
    <div>{amount.toFixed(2)}</div>
    <div>{note}</div>
  </div>
);

export default LedgerEntry;
