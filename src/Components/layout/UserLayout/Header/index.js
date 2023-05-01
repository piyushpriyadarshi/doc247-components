import React from "react";
import { Box, GlobalStyles, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";

import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  const handleModeChange = () => {};
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
          Doc 247
        </Typography>
      </div>
      <nav style={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <LanguageIcon color="primary" />
        </IconButton>

        {/* <WalletCard /> */}
        <IconButton
          //   onClick={() => requestRouteChange("/app/notification")}
          sx={{ pr: 0, mr: 0 }}
        >
          <NotificationsIcon color="primary" />
        </IconButton>
        {/* <AccountMenu /> */}
      </nav>
    </>
  );
}

export default Header;
