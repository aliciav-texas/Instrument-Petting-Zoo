/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AssessmentContext } from "../StudentAssessmentContext.jsx";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

export default function InstrumentList() {
  const { instrumentOfAssesment } = useContext(AssessmentContext);

  const [instrumentAssessed, setInstrumentAssessed] = instrumentOfAssesment;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Instrument Tested </FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        onChange={(e) => {
          setInstrumentAssessed(e.target.value);
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
