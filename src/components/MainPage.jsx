import React from "react";
import Header from "./Header.jsx";
import ReactPlayer from "react-player/youtube";
import { Typography, Grid } from "@material-ui/core";

export default function MainPage() {
  return (
    <>
      <Grid
        spacing={12}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Header />
        <Grid item>
          <Typography variant="h1"> Welcome! </Typography>
        </Grid>
        <Grid item>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=u0TcmfEVhfw"
          />
        </Grid>
        <Grid item>
          <Typography varaint="h3">
            We are excited to have you join our band family! Be sure to watch
            the video and get an idea of an instrument you would like to play
            then submit your interest form here
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
