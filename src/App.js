import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import InstrumentAssesmentForm from "./components/InstrumentAssesmentForm.jsx";
import StudentInterestForm from "./components/StudentInterestForm.jsx";
import DirectorMainPage from "./components/DirectorPage/DirectorMainPage.jsx";
import FinalCheckout from "./components/DirectorPage/FinalCheckout.jsx";
import { Grid, createTheme, ThemeProvider, Container } from "@material-ui/core";
import { DirectorDataProvider } from "./components/DirectorPage/DirectorContext.jsx";
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
                <DirectorDataProvider>
                  <Route path="/director" component={DirectorMainPage} />
                  <Route path="/finalCheckout" component={FinalCheckout} />
                </DirectorDataProvider>
              </Switch>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
