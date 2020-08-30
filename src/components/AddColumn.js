import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: 400,
    width: 200,
  },
});

// onSubmit add a new column
const AddColumn = () => {
  const classes = useStyles();
  return (
    <Button variant="outlined" color="primary" className={classes.root}>
      <AddCircleOutlineIcon />
    </Button>
  );
};

export default AddColumn;
