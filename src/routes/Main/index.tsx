import React, { FC, Fragment } from "react";
import Card from "../../components/Card";
import ContextMenu from "../../components/ContextMenu";
import { useCardsContext } from "../../context/Cards";
import { Route } from "../../context/Router/models";

const Main: FC = () => {
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

export default {
  name: "",
  component: Main,
} as Route;
