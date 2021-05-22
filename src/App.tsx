import React, { FC, Fragment } from "react";
import Card from "./components/Card";
// import Form from "./components/Form";
import { useCardsContext } from "./context/Cards";
import "./styles/app.scss";

const App: FC = () => {
  const { cards } = useCardsContext();

  return (
    <>
      {cards.map((card, cardIndex) => (
        <Fragment key={cardIndex}>
          <Card card={card} />
          {/* <Form index={cardIndex} /> */}
        </Fragment>
      ))}
    </>
  );
};

export default App;
