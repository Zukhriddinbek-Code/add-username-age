import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  //props.children will give us the content between opening and closing tag of Card
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
