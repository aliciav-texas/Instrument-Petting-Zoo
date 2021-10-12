import React from "react";
import { TextField, Typography, Grid } from "@mui/material";

export default function TesterName() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography> Director </Typography>
        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
        />
      </Grid>
    </Grid>
  );
}
