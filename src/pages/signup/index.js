import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Paper } from "@mui/material";

import axios from "axios";

import { useRouter } from "next/router";
import Logo from "@/Components/commons/Logo";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import Copyright from "@/Components/commons/CopyRight";

function SignUp() {
  const router = useRouter();

  const [formData, SetFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, SetErrorData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleValidation = (type, value) => {
    let message = "";
    switch (type) {
      case "email":
        var re = /\S+@\S+\.\S+/;
        message = re.test(value) ? "" : "Please Enter Correct Email";
        break;
      case "password":
        message = validatePassword(value);
      default:
        break;
    }
    // if (message) {
    const data = { ...error };
    data[type] = message;
    SetErrorData(data);
    // }
  };

  function validatePassword(p) {
    let message = "";
    if (p.length < 8) {
      message += "Your password must be at least 8 characters";
    }
    if (p.search(/[a-z]/i) < 0) {
      message += " Your password must contain at least one letter.";
    }
    if (p.search(/[0-9]/) < 0) {
      message += " Your password must contain at least one digit.";
    }
    return message;
  }

  const handleInputChange = (event) => {
    const data = { ...formData };
    data[event.target.id] = event.target.value;
    handleValidation(event.target.id, event.target.value);
    SetFormData(data);
  };
  const changeRoute = () => {
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //prepare the api request bodySinupRequest
    const payload = new SignupRequest(formData);
    // toast("Default Notification !");
    try {
      const res = axios.post(BACKEND_URL.signup, payload);
      const message = {};
      message.success = "User Created !!";
      message.error = "Some Error Occurred";
      message.loading = "Creating User ....";
      message.promise = res;
      createHotToast(message, "promise");
      await res;
      console.log(res);
      changeRoute();
    } catch (error) {
      const message = error?.response?.data?.message
        ? error?.response?.data?.message
        : "Some Error Occurred , Please Try Again!";
    }
    console.log(payload);
  };

  return (
    <Container component="main" maxWidth="sm">
      {/* //     <CssBaseline /> */}
      <Paper
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
        elevation={3}
      >
        <Logo />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
                value={formData.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
                value={formData.email}
                error={error.email}
                helperText={error.email}
                color="success"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleInputChange}
                value={formData.password}
                error={error.password}
                helperText={error.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={
              error.firstName || error.lastName || error.email || error.password
            }
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

SignUp.layout = IndividualPageLayout;
SignUp.metaData = {
  title: "Register for AstroGanesha",
};

export default SignUp;
