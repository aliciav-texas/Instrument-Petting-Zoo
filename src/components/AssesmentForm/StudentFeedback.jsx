import React from "react";
import { Box, TextField, Input } from "@mui/material";
export default function StudentFeedback() {
  const ariaLabel = { "aria-label": "description" };

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
      />
    </Box>
  );
}
