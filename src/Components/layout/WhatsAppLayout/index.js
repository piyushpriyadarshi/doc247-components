import {
  AppBar,
  CssBaseline,
  Fab,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Edit } from "@mui/icons-material";
import MessageIcon from "@mui/icons-material/Message";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  indicator: {
    backgroundColor: "#25D366",
  },
  palette: {
    primary: {
      main: "#075E54",
      // darker: '#053e85',
    },

    secondary: {
      main: "#25D366",
      // darker: '#053e85',
    },
  },
});

const chats = [{ image: "", name: "Piyush Priyadarshi" }];
function WhatsAppLayout({ children }) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ background: "#075E54" }}>
        <Toolbar>
          <Typography
            color={"white"}
            sx={{ fontSize: "24px", fontWeight: "400" }}
          >
            WhatsChat
          </Typography>
        </Toolbar>
      </div>
      <div
        style={{
          background: "#075E54",
          position: "sticky",
          top: "0",
          zIndex: "100",
        }}
      >
        <Toolbar sx={{ mt: 0 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // textColor="secondary"
            // indicatorColor="secondary"
            aria-label="secondary tabs example"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "white",
                // color: "#25D366",
              },
            }}
            centered
            textColor="#d1d7db"
            variant="fullWidth"
          >
            <Tab
              value="one"
              label="Chats"
              sx={{ textTransform: "none", minWidth: "50vw", color: "white" }}
            />
            <Tab
              value="two"
              label="Calls"
              sx={{ textTransform: "none", minWidth: "50vw", color: "white" }}
            />
            {/* <Tab value="three" label="Item Three" /> */}
          </Tabs>
        </Toolbar>
      </div>
      {/* <AppBar
        position="sticky"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        //   color="#075E54"
      ></AppBar> */}
      <div style={{ marginTop: "10px" }}>{children}</div>

      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: "20px", right: "15px" }}
      >
        <MessageIcon color="default" />
      </Fab>
    </ThemeProvider>
  );
}

export default WhatsAppLayout;
