import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Grid } from "@mui/material";
// === Icons
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

export default function Header() {
  return (
    <AppBar position="static" style={{ background: "#fcb865" }}>
      <Toolbar className={{ mineight: "80px" }}>
        <Grid container direction="row" justifyContent="space-between">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <QueueMusicIcon />
          </IconButton>
          <Grid item xs={8}>
            <Typography variant="h3" color="inherit" component="div">
              Reactor's Instrument Petting Zoo!
            </Typography>
          </Grid>
          <Grid item={1}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography> Add a student</Typography>
              </Grid>
              <Grid item>
                <PersonAddIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item={1}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography> Assess </Typography>
              </Grid>
              <Grid item>
                <AssignmentOutlinedIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item={1}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography> Check Out </Typography>
              </Grid>
              <Grid item>
                <MusicNoteOutlinedIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
