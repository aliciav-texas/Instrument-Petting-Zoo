/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { AssessmentContext } from "../StudentAssessmentContext.jsx";
import {
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectStudent() {
  const classes = useStyles();

  const { assessedStudent } = useContext(AssessmentContext);

  const [studentSelected, setStudentSelected] = assessedStudent;

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item>
          <Typography component="h1" variant="h5">
            {assessedStudent}
          </Typography>
        </Grid>
      </Grid>
      <FormControl required className={classes.formControl}>
        <InputLabel>Student</InputLabel>
        <Select
          native
          value={studentSelected}
          onChange={(e) => {
            setStudentSelected(e.target.value);
          }}
          name="Student"
        >
          <option aria-label="None" value="" />
          <option value={"Sofia"}>Sofia</option>
          <option value={"Gray"}>Gray</option>
          <option value={"Anna"}>Anna</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
