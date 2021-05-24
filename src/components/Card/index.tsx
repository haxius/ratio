import cc from "classcat";
import React, { FC } from "react";
import { ICard } from "../../models";
import styles from "./styles.module.scss";
import currency from "../../utils/currency";
import stringToSpans from "../../utils/stringToSpans";
import Ledger from "../Ledger";
import Toolbar from "../Toolbar";

interface CardProps {
  card: ICard;
  cardIndex: number;
}

const Card: FC<CardProps> = ({
  card: { name, use = "", limit, ledger },
  cardIndex,
}) => {
  const balance: number = ledger.length
    ? ledger.map(({ amount }) => amount).reduce((a, c) => a + c)
    : 0;

  // Disabling % on Ratio for now
  let ratio: string = Math.ceil((balance / limit) * 100).toFixed(0);
  //.replace(/^100\.0$/, "100");

  if (ratio.length < 2) ratio = `0${ratio}`;

  return (
    <div className={cc([styles.container, styles.card])}>
      <header>
        <h1>{name}</h1>
        {use ? <h4>{use}</h4> : <React.Fragment />}
        <div className={styles.status}>
          <div className={styles.hero}>
            <div className={styles.statusLabel}>BALANCE</div>
            <div
              className={cc([styles.statusCurrency, styles.statusValue])}
              dangerouslySetInnerHTML={{
                __html: currency(balance, { split: true }),
              }}
            />
            <div className={styles.statusLabel}>LIMIT</div>
            <div
              className={cc([
                styles.statusCurrency,
                styles.statusValue,
                styles.statusLimit,
              ])}
              dangerouslySetInnerHTML={{
                __html: currency(limit, { split: true }),
              }}
            />
          </div>
          <div className={cc([styles.hero, styles.heroCentered])}>
            <div className={styles.statusLabel}>RATIO</div>
            <div
              className={cc([
                styles.statusValue,
                styles.statusRatio,
                { [styles.statusRatioWithDecimal]: ratio.match(/\./) },
              ])}
              dangerouslySetInnerHTML={{
                __html: `${stringToSpans(ratio)}`,
              }}
            />
          </div>
        </div>
      </header>
      <Ledger ledger={ledger} />
      <Toolbar cardIndex={cardIndex} />
    </div>
  );
};

export default Card;
