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

export default function InstrumentScore() {
  const { instrumentScore } = useContext(AssessmentContext);

  const [instrumentRating, setInstrumentRating] = instrumentScore;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"> Instrument Score </FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        onChange={(e) => {
          setInstrumentRating(Number(e.target.value));
        }}
      >
        <FormControlLabel
          value={"1"}
          control={<Radio color="primary" />}
          label="Poor"
          labelPlacement="top"
        />
        <FormControlLabel
          value={"2"}
          control={<Radio color="primary" />}
          label="Struggling"
          labelPlacement="top"
        />
        <FormControlLabel
          value={"3"}
          control={<Radio color="primary" />}
          label="Developing"
          labelPlacement="top"
        />
        <FormControlLabel
          value={"4"}
          control={<Radio color="primary" />}
          label="Outstanding"
          labelPlacement="top"
        />
        <FormControlLabel
          value={"5"}
          control={<Radio color="primary" />}
          label="Superior"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
