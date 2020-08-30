import React, { useState } from "react";
import Column from "./components/Column";
import Header from "./components/Header";
import "./App.css";
import AddColumn from "./components/AddColumn";
import Grid from "@material-ui/core/Grid";

const App = () => {
  const [columnTitle, setColumnTitle] = useState([
    "Todo",
    "In progress",
    "Done",
  ]);

  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {columnTitle.map((title) => (
          <Column title={title} />
        ))}

        <AddColumn />
      </Grid>
    </>
  );
};

export default App;
