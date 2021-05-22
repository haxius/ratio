import React, { FC } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import { useCardsContext } from "./context/Cards";

const App: FC = () => {
  const { cards } = useCardsContext();

  return (
    <>
      {cards.map((card, cardIndex) => (
        <>
          <Card card={card} key={cardIndex} />
          <Form index={cardIndex} />
        </>
      ))}
    </>
  );
};

export default App;
