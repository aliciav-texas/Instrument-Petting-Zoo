import React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

export default function InstrumentList() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Instrument Tested </FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
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
