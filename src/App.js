import React from "react";
import Column from "./components/Column";
import Header from "./components/Header";
import "./App.css";
import AddColumn from "./components/AddColumn";
import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Column />
        <AddColumn />
      </Grid>
    </>
  );
};

export default App;
