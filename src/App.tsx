import React, { FC } from "react";
import Card from "./components/Card";
import { useCardsContext } from "./context/Cards";
import "./styles/app.scss";

const App: FC = () => {
  const { cards } = useCardsContext();

  return (
    <>
      {cards.map((card, cardIndex) => (
        <>
          <Card card={card} key={cardIndex} />
          {/* <Form index={cardIndex} /> */}
        </>
      ))}
    </>
  );
};

export default App;
