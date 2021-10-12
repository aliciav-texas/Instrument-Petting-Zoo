/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AssessmentContext } from "../StudentAssessmentContext.jsx";
import { Button } from "@mui/material";

export default function SubmitAssessmentButton() {
  const { submitAssessment } = useContext(AssessmentContext);
  const [submitStudentAssessment] = submitAssessment;
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => submitStudentAssessment()}
    >
      Submit Assessment
    </Button>
  );
}
