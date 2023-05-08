import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function FirstPaper() {
  return (
    <>
      <Paper
        sx={{
          background: "#383888f5",
          margin: 1,
          borderRadius: 4,
          marginTop: 9,
        }}
        elevation={3}
      >
        <Typography
          sx={{
            color: "#fff",
            marginLeft: 2,
            paddingTop: 1,
            fontSize: { xs: 12, sm: 17 },
          }}
        >
          Safe and Secure surgeries by
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#fff",
            marginLeft: 2,
            fontSize: { xs: 12, sm: 17 },
          }}
        >
          Expert Surgeons
        </Typography>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#fff",
              marginLeft: "16px",
              margin: 2,
              fontSize: { xs: 12, sm: 17 },
            }}
          >
            All insurance accepted & no Cost EMI available
          </Typography>
          <Button
            sx={{
              fontSize: { xs: 8, sm: 15 },
              fontWeight: 600,
              marginLeft: 2,
              margin: 2,
            }}
            variant="contained"
          >
            Book Appointment
          </Button>
        </span>
      </Paper>
    </>
  );
}
