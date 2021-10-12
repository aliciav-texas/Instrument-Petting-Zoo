import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

export default function InstrumentScore() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"> Instrument Score </FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value={1}
          control={<Radio color="primary" />}
          label="Poor"
          labelPlacement="top"
        />
        <FormControlLabel
          value={2}
          control={<Radio color="primary" />}
          label="Struggling"
          labelPlacement="top"
        />
        <FormControlLabel
          value={3}
          control={<Radio color="primary" />}
          label="Developing"
          labelPlacement="top"
        />
        <FormControlLabel
          value={4}
          control={<Radio color="primary" />}
          label="Outstanding"
          labelPlacement="top"
        />
        <FormControlLabel
          value={5}
          control={<Radio color="primary" />}
          label="Superior"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}
