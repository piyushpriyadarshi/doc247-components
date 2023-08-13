import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { amber } from "@mui/material/colors";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { useRouter } from "next/router";
import Page from "@/Components/commons/Page";

function IndividualPageLayout({ children, metaData }) {
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <AppBar color="default">
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
            }}
            style={{ marginRight: "1rem" }}
            color="success"
          >
            <NavigateBeforeIcon style={{ color: amber[500] }} />
          </IconButton>
          <Typography
            variant="title"
            component="div"
            color={amber[500]}
            sx={{ fontWeight: "550", pl: 2 }}
          >
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
