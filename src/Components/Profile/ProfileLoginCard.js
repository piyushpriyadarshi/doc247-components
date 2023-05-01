import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
// import { requestRouteChange } from "../../utils/AuthUtils";

function ProfileLoginCard() {
  return (
    <Paper elevation={3} sx={{ m: 1 }}>
      <Card sx={{ p: 0 }} comp>
        {/* <CardActionArea > */}
        <CardContent sx={{ p: 0 }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sx={{ p: 2 }} className="flex-center">
              <Typography variant="h6">
                Sign in for the best experience
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ p: 2 }}>
              <Button
                fullWidth
                color="primary"
                variant="contained"
                // onClick={() =>
                //   // requestRouteChange("/login?callBackUrl=/app/profile")
                // }
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ p: 2 }}>
              <Button
                fullWidth
                color="primary"
                variant="outlined"
                // onClick={() =>
                //   // requestRouteChange("/signup?origin=/app/profile")
                // }
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </Paper>
  );
}

export default ProfileLoginCard;
