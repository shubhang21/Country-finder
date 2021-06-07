import React from "react";
import {AppBar, Toolbar,Typography} from '@material-ui/core'

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Country Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
