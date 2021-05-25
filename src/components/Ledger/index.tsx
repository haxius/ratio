import cc from "classcat";
import React, { FC } from "react";
import { useToolbarContext } from "../../context/Toolbar";
import { ILedgerItem } from "../../models";
import currency from "../../utils/currency";
import styles from "./styles.module.scss";

interface LedgerProps {
  ledger: ILedgerItem[];
}

const Ledger: FC<LedgerProps> = ({ ledger }) => {
  const { setItemIndex, setAmount, setNote, setToolbarOpen } =
    useToolbarContext();

  const handleItemClick = (item: ILedgerItem, index: number) => {
    setItemIndex(index);
    setAmount(item.amount.toString().replace(/\./g, ""));
    setNote(item.note);
    setToolbarOpen(true);
  };

  return (
    <div className={styles.ledger}>
      <div
        className={styles.gradient}
        dangerouslySetInnerHTML={{ __html: " " }}
      />
      {ledger.map(({ amount, note }, index) => (
        <div
          key={index}
          className={cc([styles.entry, styles.hero])}
          onClick={() => handleItemClick({ amount, note }, index)}
          role="button"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: currency(amount, { split: true }),
            }}
          />
          <div>{note}</div>
        </div>
      ))}
    </div>
  );
};

export default Ledger;
