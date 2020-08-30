import React from "react";
import Card from "./Card";
import Container from "@material-ui/core/Container";

// Each Column will have a title
// A scrollable body of cards
// AddCard comp button
const Column = () => {
  return (
    <Container maxWidth='xs' style={{ border: '1px solid'}}>
      I am going to be a column
      <Card />
    </Container>
  );
};

export default Column;
