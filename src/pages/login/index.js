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
import MuiAlert from "@mui/material/Alert";
import { createHotToast } from "@/utils/ToastUtils";
import { login } from "@/utils/ApiUtils";
import { useSession } from "next-auth/react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignIn() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session, status } = useSession();
  React.useEffect(() => {
    if (status === "authenticated") {
      const { callbackUrl } = router?.query;
      if (callbackUrl) {
        setTimeout(() => {
          router.push(callbackUrl);
        }, 200);
      } else {
        setTimeout(() => {
          router.push("/app/doctor");
        }, 200);
      }
    }
  }, [status, router]);

  const handleClose = (event, reason) => {
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

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

    // if (
    //   data.get("email") == "jai@email.com" &&
    //   data.get("password") == "Jai0987"
    // ) {
    //   setIsOpen(false);
    //   router.push("/home");
    // }
    // if (
    //   data.get("email") == "priyadarship4@gmail.com" &&
    //   data.get("password") == "piyush@99"
    // ) {
    //   setIsOpen(false);
    //   router.push("/doctordashboard");
    // } else setIsOpen(true);
    // const res = login("credentials", {
    //   redirect: false,
    //   username: data.get("email"),
    //   password: data.get("password"),
    //   callbackUrl: router.query.callbackUrl,
    // });
    // const message = {};
    // message.success = "Log in Success";
    // message.error = "Invalid Credentails";
    // message.loading = "Loging in ....";
    // message.promise = res;
    // createHotToast(message, "promise");
  };

  //   console.log("login url ", BACKEND_URL.login);
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 12 }}>
      <CssBaseline />
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
          fontSize: "2rem",
          p: 2,
        }}
      >
        PlanetSchool
      </Typography>

      <Typography variant="p" sx={{ fontWeight: 550 }}>
        Login With
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        //   sx={{ pt: 2 }}
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
        {/* <Grid>
              {isOpen && (
                <Alert onClose={handleClose} severity="error">
                  Please provide valid credentials!
                </Alert>
              )}
            </Grid> */}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 1, mb: 2 }}
          className="appButton"
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs={6}>
            <Link href="/auth/forgot-password" variant="p" className="linkText">
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="/auth/register"
              variant="p"
              //   className="linkText"
              color="secondary"
            >
              {"Don't have an account? SignUp"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      {/* </Paper> */}
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
}

SignIn.layout = IndividualPageLayout;
SignIn.metaData = {
  title: "Sign in",
};
export default SignIn;
