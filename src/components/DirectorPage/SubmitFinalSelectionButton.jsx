/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DirectorContext } from "./DirectorContext.jsx";
import { Button } from "@mui/material";

export default function SubmitFinalSelectionButton() {
  const { selectedStudentState, submitInstrument, updateRoster } =
    useContext(DirectorContext);

  const [checkoutStudent, updateCheckoutStudent] = selectedStudentState;
  const [submitFinalInstrument] = submitInstrument;
  const [updateStudentRoster] = updateRoster;

  if (!checkoutStudent) {
    return <> </>;
  } else {
    return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() =>
          Promise.all([submitFinalInstrument(), updateStudentRoster()]).then(
            (success) => console.log("success")
          )
        }
      >
        Finalize Instrument!
      </Button>
    );
  }
}
//
//.
