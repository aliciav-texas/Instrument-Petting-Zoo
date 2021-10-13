/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DirectorContext } from "./DirectorContext.jsx";
import { Button } from "@mui/material";

export default function SubmitFinalSelectionButton() {
  const { selectedStudentState } = useContext(DirectorContext);

  const [checkoutStudent, updateCheckoutStudent] = selectedStudentState;
  if (!checkoutStudent) {
    return <> </>;
  } else {
    return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        // onClick={() => submitStudentAssessment()}
      >
        Finalize Instrument!
      </Button>
    );
  }
}
