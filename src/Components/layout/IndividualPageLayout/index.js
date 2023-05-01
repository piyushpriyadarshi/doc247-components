import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { amber } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useRouter } from "next/router";
import Page from "@/Components/commons/Page";

function IndividualPageLayout({ children, metaData }) {
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            p: 0,
          }}
        >
          <IconButton
            onClick={() => {
              router.back();
              // history.back();
            }}
            style={{ marginRight: "1rem" }}
            color="success"
          >
            <ArrowBackIcon style={{ color: amber[500] }} />
          </IconButton>
          <Typography variant="title" component="div" color={amber[500]}>
            {metaData?.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Page title={metaData?.title} sx={{ mt: 10 }}>
        {children}
      </Page>
    </>
  );
}

export default IndividualPageLayout;
