import React, { FC, useState } from "react";
import Card from "./components/Card";
import { useCardsContext } from "./context/Cards";

const App: FC = () => {
  const { cardsState: cards, dispatchCards } = useCardsContext();
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  return (
    <>
      {cards.map((card, cardIndex) => (
        <>
          <Card card={card} key={cardIndex} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatchCards({
                type: "ADD_LEDGER_ITEM",
                payload: {
                  index: cardIndex,
                  item: { amount: parseFloat(amount), note },
                },
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
            onClick={() =>
              dispatchCards({ type: "BALANCE_LEDGER", payload: cardIndex })
            }
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
            onClick={() =>
              dispatchCards({ type: "CLEAR_LEDGER", payload: cardIndex })
            }
          >
            clear
          </div>
        </>
      ))}
    </>
  );
};

export default App;
