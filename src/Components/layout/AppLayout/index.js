import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  InputBase,
  Paper,
} from "@mui/material";
import { Home, Person, ShoppingCart } from "@mui/icons-material";
import { useRouter } from "next/router";
import bottomNav from "./bottomNavigation";
import FullScreenDialog from "@/Components/commons/FullScreenDialog";

const drawerWidth = 240;

function AppLayout({ children, header, sidebar, window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isSearchOpen, setisSearchOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();
  const drawer = (
    <div>
      {/* <Toolbar>
        <Typography variant="h6"> App Actions</Typography>
      </Toolbar>
      <Divider /> */}
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
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
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
        <Toolbar>
          <Grid container>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  // position: "fixed",
                  // width: "90%",
                  // backgroundColor: "#fff",
                  // zIndex: 101,
                  borderRadius: "2rem",
                  p: 0.5,
                }}
              >
                <InputBase
                  fullWidth
                  elevation={3}
                  placeholder="search for doctors "
                  // onChange={handleSearchFocus}
                  onBeforeInput={handleSearchFocus}
                />
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          // display: {
          //   xs: "block",
          //   sm: "block",
          //   md: "block",
          //   lg: "block",
          //   xl: "none",
          // },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          // maxWidth: { sm: `calc(100% - ${drawerWidth}px)` },
          mb: 6,
        }}
      >
        <Toolbar />

        {children}
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
            md: "block",
            lg: "block",
            xl: "none",
          },
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
