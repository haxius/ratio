import cc from "classcat";
import React, { FC, Fragment, useState } from "react";
import { useCardsContext } from "../../context/Cards";
import { useToolbarContext } from "../../context/Toolbar";
import currency from "../../utils/currency";
import Icon from "../Icon";
import Keypad from "../Keypad";
import styles from "./styles.module.scss";

interface ToolbarProps {
  cardIndex: number;
}

const Toolbar: FC<ToolbarProps> = ({ cardIndex }) => {
  const { addLedgerItem } = useCardsContext();
  const [amount, setAmount] = useState("");
  const { toolbarOpen, setToolbarOpen } = useToolbarContext();
  const handleToolbarOpenClick = () => setToolbarOpen(true);
  const handleBackClick = () => setToolbarOpen(false);
  const handleAmountChange = (newAmount: string) => setAmount(newAmount);

  const handleSubmit = () => {
    addLedgerItem(cardIndex, { amount: parseInt(amount) / 100, note: "N/A" });
    setAmount("");
    setToolbarOpen(false);
  };

  return (
    <>
      <div className={styles.toolbar}>
        <div
          className={styles.gradient}
          dangerouslySetInnerHTML={{ __html: " " }}
        />
        {toolbarOpen ? (
          <Fragment />
        ) : (
          <>
            <div> </div>
            <Icon icon="/icon-plus.png" onClick={handleToolbarOpenClick} />
          </>
        )}
      </div>
      <div
        className={cc([
          styles.toolbarOpen,
          { [styles.toolbarOpenActive]: toolbarOpen },
        ])}
      >
        <div className={styles.form}>
          <div className={styles.amount}>
            {amount ? currency(parseFloat(amount) / 100) : currency(0)}
          </div>
        </div>
        <Keypad
          onChange={handleAmountChange}
          onSubmit={handleSubmit}
          onBack={handleBackClick}
          value={amount}
          setValue={setAmount}
        />
      </div>
    </>
  );
};

export default Toolbar;
