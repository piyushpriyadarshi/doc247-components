import React, { useState } from "react";
import { useRouter } from "next/router";
// import InputField from "@/components/form/InputField";
// import RadioField from "@/components/form/radioField";
// import SelectField from "@/components/form/selectField";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { BOARDS, DESIGNATIONS, STATES } from "@/constant/attributes";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Logo from "@/Components/commons/Logo";
import { useForm } from "@/hooks/useForm";
import Link from "next/link";
const RegisterForm = () => {
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    name: "",
    email: "",
    phoneNumber: "",
    designation: "",
    board: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
  });

  const handleSubmit1 = () => {
    console.log("form submitted");
  };
  const { data, errors, handleChange, handleSubmit } = useForm({
    initialValues: {},
    onSubmit: handleSubmit1,
  });
  console.log(data);

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          padding: 2,
        }}
        elevation={2}
      >
        {/* <Logo /> */}
        <Stack spacing={2}>
          <form onSubmit={handleSubmit}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="First Name"
                value={data.firstName}
                onChange={handleChange("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName}
                fullWidth
                // color="warning"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        // onClick={() => setShowPassword(!showPassword)}
                        // color="success"
                      >
                        {errors.firstName ? (
                          <ErrorIcon color="warning" />
                        ) : (
                          <CheckCircleIcon color="success" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                size="small"
              />
              <TextField
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName}
                fullWidth
              />
            </Stack>
            <TextField
              label="School Name"
              value={formData.name}
              onChange={handleChange("name")}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              value={formData.email}
              onChange={handleChange("email")}
              error={!!errors.email}
              helperText={errors.email}
            />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Mobile Number"
                value={formData.phoneNumber}
                onChange={handleChange("phoneNumber")}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              {/* <SelectField
            label="Designation"
            value={formData.designation}
            onChange={handleChange("designation")}
            options={DESIGNATIONS}
            error={!!errors.designation}
            helperText={errors.designation}
          /> */}
            </Stack>
            {/* <RadioField
          label="Board"
          value={formData.board}
          options={BOARDS}
          onChange={handleChange("board")}
          error={!!errors.board}
          helperText={errors.board}
        /> */}
            <TextField
              label="Street"
              value={formData.street}
              onChange={handleChange("street")}
              error={!!errors.street}
              helperText={errors.street}
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="City"
                value={formData.city}
                onChange={handleChange("city")}
                error={!!errors.city}
                helperText={errors.city}
              />
              <TextField
                label="State"
                value={formData.state}
                onChange={handleChange("state")}
                options={STATES}
                error={!!errors.state}
                helperText={errors.state}
              />
            </Stack>
            <TextField
              label="Pincode"
              value={formData.pincode}
              onChange={handleChange("pincode")}
              error={!!errors.pincode}
              helperText={errors.pincode}
            />
            <TextField
              label="Password"
              value={formData.password}
              onChange={handleChange("password")}
              error={!!errors.password}
              helperText={errors.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Stack spacing={2}>
              <Button fullWidth size="large" type="submit" variant="contained">
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
        <Grid container>
          <Grid item xs={6}>
            <Link href="/forgotPassword" variant="p" className="linkText">
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="/signup" variant="p" className="linkText">
              {"Don't have an account? SignUp"}
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
