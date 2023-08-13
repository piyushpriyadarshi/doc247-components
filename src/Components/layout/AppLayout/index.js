import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import BugReportIcon from "@mui/icons-material/BugReport";

import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  Fab,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import bottomNav from "./bottomNavigation";
import FullScreenDialog from "@/Components/commons/FullScreenDialog";
import BugForm from "@/Components/commons/bugform/BugForm";
import Sidebar from "../dashboard/DoctorDasboard/Sidebar";

const drawerWidth = 240;

function AppLayout({ children, header, sidebar, window }) {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(!onlySmallScreen);
  const [isSearchOpen, setisSearchOpen] = React.useState(false);

  console.log(onlySmallScreen);
  const [value, setValue] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();
  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6"> App Actions</Typography>
      </Toolbar>
      <Divider />
      {sidebar}
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleSearchFocus = () => {
    setisSearchOpen(true);
  };
  const handleSearchDialogClose = () => {
    setisSearchOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width:
            mobileOpen && !onlySmallScreen
              ? `calc(100% - ${drawerWidth}px)`
              : `100%`,
          transition: "width 0.2s ease-in-out",
        }}
        color="default"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          {header}
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant={onlySmallScreen ? "temporary" : "persistent"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {/* {drawer}\ */}

        <Sidebar
          onClose={() => {
            if (onlySmallScreen) {
              setMobileOpen(false);
            }
          }}
        />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 0,
          // maxWidth: { sm: `calc(100% - ${drawerWidth}px)` },
          mb: 6,
          // overflow: "hidden",
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          marginLeft:
            mobileOpen && !onlySmallScreen ? `${drawerWidth}px` : `0px`,
          transition: "margin-left 0.2s ease-in-out",
        }}
      >
        <Toolbar />

        {children}

        {/* <IconButton
          sx={{ position: "fixed", bottom: "50px", right: 0, zIndex: 1000 }}
          color="success"
        >
      </IconButton> */}
        {/* <BugForm /> */}

        <Fab
          color="success"
          aria-label="add"
          size="small"
          sx={{
            position: "fixed",
            bottom: "60px",
            right: "50px",
            zIndex: 1000,
          }}
        >
          <Tooltip title="Report a bug">
            <BugReportIcon />
          </Tooltip>
        </Fab>
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          marginLeft:
            mobileOpen && !onlySmallScreen ? `${drawerWidth}px` : `0px`,
          transition: "margin-left 0.2s ease-in-out",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            router.push(bottomNav[newValue]?.url);
          }}
        >
          {bottomNav.map((nav, index) => {
            return (
              <BottomNavigationAction
                label={nav?.text}
                icon={nav?.icon}
                key={index}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
      <FullScreenDialog open={isSearchOpen} onClose={handleSearchDialogClose} />
    </Box>
  );
}

export default AppLayout;
