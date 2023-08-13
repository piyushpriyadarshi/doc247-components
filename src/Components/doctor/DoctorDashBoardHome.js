import { Grid, Paper } from "@mui/material";
import React from "react";

function DoctorDashBoardHome() {
  return (
    <Grid container spacing={2} sx={{ p: 1 }}>
      {["Users", "bookings", "data"].map((data, index) => {
        return (
          <Grid item key={index} xs={4} sx={{ p: 1 }}>
            <Paper
              elevation={2}
              sx={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data}
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DoctorDashBoardHome;
