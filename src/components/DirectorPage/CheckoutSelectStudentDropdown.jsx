/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { DirectorContext } from "./DirectorContext.jsx";
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

export default function CheckoutSelectStudentDropdown() {
  const classes = useStyles();

  const { listOfStudentsState, selectedStudentState, selectedStudentID } =
    useContext(DirectorContext);
  const [listOfStudents, updateListOfStudents] = listOfStudentsState;
  const [selectedStudent, setSelectedStudent] = selectedStudentState;

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item>
          <Typography component="h1" variant="h5">
            {selectedStudent}
          </Typography>
        </Grid>
      </Grid>
      <FormControl required className={classes.formControl}>
        <InputLabel>Student</InputLabel>
        <Select
          native
          value={selectedStudent}
          onChange={(e) => {
            setSelectedStudent(e.target.value);
          }}
          name="Student"
        >
          <option value={""}>{""}</option>
          {listOfStudents.map((student) => {
            return <option value={student}>{student}</option>;
          })}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
