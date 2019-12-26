import React from "react";
import Card from "./Card";

const CardList = ({ robots }) =>
  robots.map(robot => <Card key={robot.id} {...robot} />);

export default CardList;
