import React, { useState } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { useRouter } from "next/router";
import AppList from "@/Components/commons/list/AppList";
import { DOCTOR_DASHBORAD_SIDEBAR_MENUS } from "@/constant/doctor/DoctorSideBarConstant";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";

function Sidebar({ onClose }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const sidebar_menus = DOCTOR_DASHBORAD_SIDEBAR_MENUS;

  const [sidebarUrl, SetsidebarUrl] = useState("/app/doctor");
  function handleListItemClick(text, url) {
    SetsidebarUrl(url);
    router.push(url);
    onClose();
  }

  function isListItemSelected(text, url) {
    return url === router.pathname;
  }
  return (
    <>
      {/* <AppBar
        // position="fixed"
        // sx={{
        //   width:
        //     mobileOpen && !onlySmallScreen
        //       ? `calc(100% - ${drawerWidth}px)`
        //       : `100%`,
        //   transition: "width 0.2s ease-in-out",
        // }}
        color="default"
        fullWidth
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar> */}
      {Object.keys(sidebar_menus).map((list) => {
        return (
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              mt: 4,
            }}
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {list}
              </ListSubheader>
            }
            key={list}
          >
            {sidebar_menus[list].map((menuItem, index) => {
              // console.log(router.asPath, "\t", menuItem.url);
              const isSelected = isListItemSelected(
                menuItem.text,
                menuItem.url
              );
              // console.log(isSelected);
              // console.log(router.pathname, "\t");
              return (
                <AppList
                  key={index}
                  onSelectedUrl={handleListItemClick}
                  listData={menuItem}
                  isListItemSelected={isListItemSelected}
                  isListSelected={isSelected}
                  isAppListMenuOpen={router.asPath.includes(menuItem?.url)}
                />
              );
            })}
          </List>
        );
      })}
    </>
  );
}

export default Sidebar;
