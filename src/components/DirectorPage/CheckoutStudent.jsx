import React from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";

export default function CheckoutStudent() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" fullWidth endIcon={<AddCircleIcon />}>
        Student Checkout
      </Button>
    </Stack>
  );
}
