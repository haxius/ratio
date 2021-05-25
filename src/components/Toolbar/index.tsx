import cc from "classcat";
import React, { FC, Fragment } from "react";
import { useCardsContext } from "../../context/Cards";
import { defaultNote, useToolbarContext } from "../../context/Toolbar";
import { ILedgerItem } from "../../models";
import currency from "../../utils/currency";
import Icon from "../Icon";
import Keypad from "../Keypad";
import TextInput from "../TextInput";
import styles from "./styles.module.scss";

interface ToolbarProps {
  cardIndex: number;
}

const Toolbar: FC<ToolbarProps> = ({ cardIndex }) => {
  const { addLedgerItem, overwriteLedgerItem } = useCardsContext();

  const {
    toolbarOpen,
    setToolbarOpen,
    itemIndex,
    note,
    setNote,
    amount,
    setAmount,
    clearAndCloseToolbar,
  } = useToolbarContext();

  const handleToolbarOpenClick = () => setToolbarOpen(true);
  const handleAmountChange = (newAmount: string) => setAmount(newAmount);
  const handleNoteChange = (newNote: string) =>
    setNote(newNote ? newNote : "ADD NOTE?");

  const handleBackClick = () => clearAndCloseToolbar();

  const handleSubmit = () => {
    const ledgerItem: ILedgerItem = {
      amount: parseInt(amount) / 100,
      note: note === defaultNote ? "N/A" : note,
    };

    if (typeof itemIndex === "number") {
      overwriteLedgerItem(cardIndex, itemIndex, ledgerItem);
    } else {
      addLedgerItem(cardIndex, ledgerItem);
    }

    clearAndCloseToolbar();
  };

  console.log("Amount", amount);

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
          <div className={styles.note}>
            <TextInput
              value={note}
              onChange={handleNoteChange}
              showPlaceholder={note === defaultNote}
              maxLength={160}
            />
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
