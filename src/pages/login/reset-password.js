import React from "react";

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "@/Components/commons/Logo";
import Link from "next/link";
import Copyright from "@/Components/commons/CopyRight";

function PasswordReset() {
  const isTokenValid = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("password"),
      password: data.get("password1"),
    });
  };
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
        elevation={3}
      >
        <Logo />
        <Typography component="h2" variant="h6">
          Reset Password
        </Typography>
        {isTokenValid ? (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="New Password"
              name="password"
              type="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password1"
              label="Confirm Password"
              type="password"
              id="password1"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, borderRadius: "10px" }}
            >
              Update Password
            </Button>
          </Box>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography component="h2" variant="h6">
              This Password reset link has expired
            </Typography>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password">Resend Link</Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

// export async function getServerSideProps(context) {
//   // const res = await axios.get('http://coding-backend:8000');
//   console.log(process.env.NODE_ENV);
//   console.log(process.env.TOKEN_SECRET);
//   console.log(process.env.APP_SECRET);
//   console.log(process.env.DOCKER_ENABLE);
//   // console.log(res);
//   const token = context?.query?.token;
//   let isTokenValid = true;
//   try {
//     const res = await checkTokenValidity(token);
//   } catch (error) {
//     isTokenValid = false;
//   }
//   // Pass data to the page via props
//   return { props: { isTokenValid, token } };
// }
export default PasswordReset;
