import React, { FC, useState } from "react";
import { useCardsContext } from "../context/Cards";

interface FormProps {
  index: number;
}

const Form: FC<FormProps> = ({ index }) => {
  const { addLedgerItem, balanceLedger, clearLedger } = useCardsContext();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addLedgerItem(index, {
            amount: parseFloat(amount),
            note,
          });
          setAmount("");
          setNote("");
        }}
        target="#"
      >
        <input
          placeholder="amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="note"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div
        role="button"
        style={{
          border: "1px solid red",
          padding: "15px",
          maxWidth: "100px",
          textAlign: "center",
        }}
        onClick={() => balanceLedger(index)}
      >
        balance
      </div>
      <div
        role="button"
        style={{
          border: "1px solid red",
          padding: "15px",
          maxWidth: "100px",
          textAlign: "center",
        }}
        onClick={() => clearLedger(index)}
      >
        clear
      </div>
    </>
  );
};

export default Form;
