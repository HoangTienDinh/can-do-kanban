import React from "react";
import Task from "./TaskCard";
import Container from "@material-ui/core/Container";
import AddTaskCard from './AddTaskCard'
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: 400,
    width: 200,
  },
});

// Each Column will have a title
// A scrollable body of cards
// AddCard comp button
const Column = ({ title }) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.root}
      maxWidth="xs"
      style={{ border: "1px solid" }}
    >
      <Typography>{title}</Typography>
      <AddTaskCard />
      <Task />
      <Task />

    </Container>
  );
};

export default Column;
