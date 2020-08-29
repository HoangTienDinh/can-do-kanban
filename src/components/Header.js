import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CheckBoxIcon />
        <Typography variant="h6" color="inherit" noWrap>
          Can-Do Kanban Board
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
