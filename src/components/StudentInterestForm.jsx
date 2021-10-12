import React, { useState } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import MusicNoteIcon from "@mui/icons-material/MusicNote";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function StudentInterestForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [value, setValue] = useState(false);

  const handleChange = (event) => {
    setValue(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <MusicNoteIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Instrument Interest Form
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                Student First Name
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Student First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Student Last Name
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Student Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Guardian First Name
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Guardian First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Guardian Last Name
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Guardian Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                Email Address
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                Phone
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  id="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Does your child have any previous piano experience?
                  </FormLabel>
                  <RadioGroup
                    aria-label="pronouns"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
