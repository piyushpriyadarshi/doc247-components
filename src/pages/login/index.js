import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { Paper } from "@mui/material";

import Copyright from "@/Components/commons/CopyRight";
import Logo from "@/Components/commons/Logo";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";

function SignIn() {
  const router = useRouter();
  //   const { data: session, status } = useSession();
  //   React.useEffect(() => {
  //     if (status === "authenticated") {
  //       const { callbackUrl } = router?.query;
  //       if (callbackUrl) {
  //         setTimeout(() => {
  //           router.push(callbackUrl);
  //         }, 200);
  //       } else {
  //         setTimeout(() => {
  //           router.push("/cms");
  //         }, 200);
  //       }
  //     }
  //   }, [status, router]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //     email: data.get('email'),
    //     password: data.get('password'),
    // });
    const res = login("credentials", {
      redirect: false,
      username: data.get("email"),
      password: data.get("password"),
      callbackUrl: router.query.callbackUrl,
    });
    const message = {};
    message.success = "Log in Success";
    message.error = "Invalid Credentails";
    message.loading = "Loging in ....";
    message.promise = res;
    createHotToast(message, "promise");
  };

  //   console.log("login url ", BACKEND_URL.login);
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 1,
            // border:'2px solid green'
          }}
          elevation={3}
        >
          <Logo
            style={{ margin: "0", padding: "0" }}
            width="100px"
            height="100px"
          />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ pt: 2 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="a">
                  {/* <a >{"Don't have an account? Sign Up"}</a> */}
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
}

SignIn.layout = IndividualPageLayout;
SignIn.metaData = {
  title: "Sigin | Login  , AstroGanesha",
};
export default SignIn;
