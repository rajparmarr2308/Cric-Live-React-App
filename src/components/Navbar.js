import React from 'react'
import { AppBar,Toolbar,Typography,IconButton,Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {
    return (
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          CricLive
        </Typography>
      </Toolbar>
    </AppBar>
    )
}
