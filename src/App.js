import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import InstrumentAssesmentForm from "./components/InstrumentAssesmentForm.jsx";
import StudentInterestForm from "./components/StudentInterestForm.jsx";
import DirectorSignIn from "./components/DirectorSignIn.jsx";
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
            <Router>
              <Header />
              <Switch>
                <Route path="/" exact component={MainPage} />
                <Route
                  path="/studentInterest"
                  component={StudentInterestForm}
                />
                <Route
                  path="/instrumentAssesment"
                  component={InstrumentAssesmentForm}
                />
                <Route path="/director-sign-in" component={DirectorSignIn} />
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
