import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function ErrorPage() {
  const router = useRouter();
  const { code, message } = router.query;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Oops! Some Error Occurred</Typography>
      <Typography>{message}</Typography>
    </div>
  );
}

export default ErrorPage;
