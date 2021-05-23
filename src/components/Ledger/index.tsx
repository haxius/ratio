import cc from "classcat";
import React, { FC } from "react";
import { ILedgerItem } from "../../models";
import currency from "../../utils/currency";
import styles from "./styles.module.scss";

interface LedgerProps {
  ledger: ILedgerItem[];
}

const Ledger: FC<LedgerProps> = ({ ledger }) => {
  return (
    <div className={styles.ledger}>
      <div
        className={styles.gradient}
        dangerouslySetInnerHTML={{ __html: " " }}
      />
      {ledger.map(({ amount, note }, index) => (
        <div key={index} className={cc([styles.entry, styles.hero])}>
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
