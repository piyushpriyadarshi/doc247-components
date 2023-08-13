import React from "react";
import { Box, GlobalStyles, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountMenu from "@/Components/commons/AccountMenu";
import Link from "next/link";

function Header() {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
        <Typography
          color="primary"
          sx={{ fontWeight: "600", fontSize: "1.3rem" }}
        >
          Doc247
        </Typography>
      </div>
      <nav style={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }} />
        <Link href={"/app-settings"}>
          <IconButton>
            <LanguageIcon color="primary" />
          </IconButton>
        </Link>

        <Link href={"/notifications"}>
          <IconButton>
            <NotificationsIcon color="primary" />
          </IconButton>
        </Link>
        <AccountMenu />
      </nav>
    </>
  );
}

export default Header;
