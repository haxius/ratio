import React, { FC, Fragment } from "react";
import Card from "./components/Card";
import ContextMenu from "./components/ContextMenu";
import { useCardsContext } from "./context/Cards";
import "./styles/app.scss";

const App: FC = () => {
  const { cards } = useCardsContext();

  return (
    <>
      {cards.map((card, cardIndex) => (
        <Fragment key={cardIndex}>
          <Card card={card} cardIndex={cardIndex} />
        </Fragment>
      ))}
      <ContextMenu />
    </>
  );
};

export default App;
