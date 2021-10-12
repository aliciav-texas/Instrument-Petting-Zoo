/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
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
  const [selectedStudent, setSelectedStudent] = useState("");

  const handleChange = (event) => {
    const name = event.target.value;
    console.log(name);
    setSelectedStudent(name);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel>Student</InputLabel>
        <Select
          native
          value={selectedStudent}
          onChange={handleChange}
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
