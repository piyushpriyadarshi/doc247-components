import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, useTheme } from "@mui/material";
function Spinner({ open, message }) {
  const theme = useTheme();
  const mode = theme?.palette?.mode;
  return (
    <div className={open ? "modal-content modal" : "modal-content modal-none"}>
      <Stack
        sx={{
          zIndex: "500",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
        }}
        spacing={2}
        direction="row"
      >
        <div
          style={{
            backgroundColor: `${mode === "light" ? "white" : "#ffffff1a"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <CircularProgress sx={{ textAlign: "center" }} />
          <Typography sx={{ ml: 2 }}>{message}</Typography>
        </div>
      </Stack>
    </div>
  );
}

export default Spinner;
