/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AssessmentContext } from "../StudentAssessmentContext.jsx";
import { Box, TextField } from "@mui/material";
export default function StudentFeedback() {
  const { writtenInstrumentFeedback } = useContext(AssessmentContext);

  const [writtenFeedback, setWrittenInstrumentFeedback] =
    writtenInstrumentFeedback;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label="Student Feedback"
        multiline
        style={{ width: "100%" }}
        rows={4}
        placeholder="Please write feedback on tone production, embouchure and student interest!"
        onChange={(e) => {
          setWrittenInstrumentFeedback(e.target.value);
        }}
      />
    </Box>
  );
}
