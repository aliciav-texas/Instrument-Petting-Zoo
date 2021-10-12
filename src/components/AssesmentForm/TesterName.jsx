/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AssessmentContext } from "../StudentAssessmentContext.jsx";
import { TextField, Typography, Grid } from "@mui/material";

export default function TesterName() {
  const { directorOfAssesment } = useContext(AssessmentContext);
  const [assessorName, setAssessorName] = directorOfAssesment;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography> Director </Typography>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
          onChange={(e) => {
            setAssessorName(e.target.value);
          }}
        />
      </Grid>
    </Grid>
  );
}
