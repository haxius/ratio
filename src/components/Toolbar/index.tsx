import cc from "classcat";
import React, { FC, Fragment, useState } from "react";
import { useCardsContext } from "../../context/Cards";
import { useToolbarContext } from "../../context/Toolbar";
import currency from "../../utils/currency";
import Icon from "../Icon";
import Keypad from "../Keypad";
import TextInput from "../TextInput";
import styles from "./styles.module.scss";

interface ToolbarProps {
  cardIndex: number;
}

const defaultAmount = "";
const defaultNote = "ADD NOTE?";

const Toolbar: FC<ToolbarProps> = ({ cardIndex }) => {
  const { addLedgerItem } = useCardsContext();
  const [amount, setAmount] = useState(defaultAmount);
  const [note, setNote] = useState(defaultNote);
  const { toolbarOpen, setToolbarOpen } = useToolbarContext();
  const handleToolbarOpenClick = () => setToolbarOpen(true);
  const handleAmountChange = (newAmount: string) => setAmount(newAmount);
  const handleNoteChange = (newNote: string) =>
    setNote(newNote ? newNote : "ADD NOTE?");

  const handleBackClick = () => {
    setAmount(defaultAmount);
    setNote(defaultNote);
    setToolbarOpen(false);
  };

  const handleSubmit = () => {
    addLedgerItem(cardIndex, {
      amount: parseInt(amount) / 100,
      note: note === defaultNote ? "N/A" : note,
    });
    setAmount(defaultAmount);
    setNote(defaultNote);
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
