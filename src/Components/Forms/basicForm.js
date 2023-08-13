import * as React from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Card,
  CardContent,
  Typography,
  FormControl,
  Paper,
} from "@mui/material";

export default function BasicForm() {
  return (
    <Box sx={{ marginTop: 1 }} component={Paper}>
      <Grid item xs={12}>
        <Card>
          <Grid sx={{ margin: 2 }}>
            <Grid style={{ width: "100%" }}>
              <FormControl fullWidth={true}>
                <TextField id="name" label="Name" variant="standard" required />
              </FormControl>
            </Grid>
            <Grid sx={{ width: "100%", marginTop: 3 }}>
              <FormControl fullWidth={true}>
                <TextField
                  id="standard-full-width"
                  label="Mobile Number"
                  variant="standard"
                  required
                  type="number"
                />
              </FormControl>
            </Grid>
            <Grid sx={{ width: "100%", marginTop: 3 }}>
              <FormControl fullWidth={true}>
                <TextField
                  id="standard-full-width"
                  label="Address"
                  variant="standard"
                  required
                  multiLine={true}
                  rows={3}
                />
              </FormControl>
            </Grid>
            <Grid sx={{ width: "100%", marginTop: 3 }}>
              <FormControl fullWidth={true}>
                <TextField
                  id="standard-full-width"
                  label="DOB"
                  variant="standard"
                  required
                  type="date"
                />
              </FormControl>
            </Grid>
            <Grid sx={{ width: "100%", marginTop: 3 }}>
              <FormControl fullWidth={true}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
}
