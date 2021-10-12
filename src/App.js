import React from "react";
import MainPage from "./components/MainPage.jsx";
import { Grid, createTheme, ThemeProvider, Container } from "@material-ui/core";

const theme = createTheme({
  pallette: {
    primary: {
      main: "fcb865",
    },
    secondary: {
      main: "fcb865",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default function App() {
  return (
    <Container maxWidth="lg" className="App">
      <ThemeProvider theme={theme}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <MainPage />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
