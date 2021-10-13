/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { DirectorContext } from "./DirectorContext";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

export default function FinalInstrumentSelection() {
  const { selectedStudentState, finalInstrumentSelection } =
    useContext(DirectorContext);

  const [checkoutStudent, updateCheckoutStudent] = selectedStudentState;

  const [finalInstrument, setFinalInstrument] = finalInstrumentSelection;

  if (!checkoutStudent) {
    return <> </>;
  } else {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend"> Finalize Instrument! </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
          onChange={(e) => {
            setFinalInstrument(e.target.value);
          }}
        >
          <FormControlLabel
            value="Woodwind"
            control={<Radio color="primary" />}
            label="Woodwind"
            labelPlacement="top"
          />
          <FormControlLabel
            value="Brass"
            control={<Radio color="primary" />}
            label="Brass"
            labelPlacement="top"
          />
          <FormControlLabel
            value="Percussion"
            control={<Radio color="primary" />}
            label="Percussion"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
    );
  }
}
