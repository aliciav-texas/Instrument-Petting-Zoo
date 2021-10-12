/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { StudentAssessmentProvider } from "./StudentAssessmentContext.jsx";

import SelectStudent from "./AssessmentForm/SelectStudent.jsx";
import InstrumentList from "./AssessmentForm/InstrumentList.jsx";
import TesterName from "./AssessmentForm/TesterName.jsx";
import InstrumentScore from "./AssessmentForm/InstrumentScore.jsx";
import StudentFeedback from "./AssessmentForm/StudentFeedback.jsx";
import SubmitAssessmentButton from "./AssessmentForm/SubmitAssessmentButton.jsx";
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@mui/material";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function StudentInterestForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = useState(false);

  const handleChange = (event) => {
    setValue(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <BorderColorIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Instrument Assesment
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <StudentAssessmentProvider>
              <SelectStudent />
              <InstrumentList />
              <TesterName />
              <InstrumentScore />
              <StudentFeedback />
              <SubmitAssessmentButton />
            </StudentAssessmentProvider>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
