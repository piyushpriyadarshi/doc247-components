import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";

import Settings from "@mui/icons-material/Settings";

import Logout from "@mui/icons-material/Logout";

import { Button, ListSubheader } from "@mui/material";
import { useRouter } from "next/router";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AppList from "@/Components/AppList";
import ProfileCard from "@/Components/Profile/ProfileCard";
import Logo from "@/Components/commons/Logo";

import classes from "@/styles/sidebar/sidebar.module.css";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const sidebar = {
    "App Dashboard": [
      {
        text: "Astrology",
        url: `/cms/astrology`,
        icon: <Logo height="40" width="40" alt="Share My Codes" />,
        subroutes: [
          {
            text: "Rashi",
            url: `/cms/astrology/rashi`,
            icon: <Logo height="40" width="40" alt="Share My Codes" />,
          },
        ],
      },
      {
        text: "Numerolgy",
        url: `/cms/numerology`,
        icon: <Logo height="40" width="40" alt="Share My Codes" />,
        // subroutes: [{}],
      },
    ],
    // "Account Setting": [
    //   { text: "My Profile", url: `/codes/me`, icon: <ManageAccountsIcon /> },
    //   {
    //     text: "Setting",
    //     url: `/codes/settings`,
    //     icon: <Settings fontSize="small" />,
    //   },
    //   { text: "Logout", url: `/logout`, icon: <Logout fontSize="small" /> },
    // ],
  };

  // const routes = sidebarmenus.map((item) => item.url);

  const [selected, setSelected] = useState("");
  //   const navigate = useNavigate();
  function handleListItemClick(text, url) {
    setSelected(text);
    router.push(url);
  }

  function isListItemSelected(text, url) {
    return url === router.pathname;
  }
  return (
    <>
      {/* {status === "unauthenticated" ? (
        <ProfileLoginCard />
      ) : (
        <ProfileCard
          onClick={() => {
            router.push("/app/profile");
          }}
        />
      )} */}

      <ProfileCard
        onClick={() => {
          router.push("/me");
        }}
      />

      {Object.keys(sidebar).map((list) => {
        return (
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              mt: 4,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {list}
              </ListSubheader>
            }
            key={list}
          >
            {sidebar[list].map((menuItem, index) => {
              const isSelected = isListItemSelected(
                menuItem.text,
                menuItem.url
              );
              return (
                <AppList
                  key={index}
                  onSelectedUrl={handleListItemClick}
                  listData={menuItem}
                  isListItemSelected={isListItemSelected}
                  isListSelected={isSelected}
                />
                // <ListItem
                //   button
                //   key={index}
                //   selected={isListItemSelected(menuItem.text, menuItem.url)}
                //   onClick={() =>
                //     handleListItemClick(menuItem.text, menuItem.url)
                //   }
                //   className={isSelected ? `${classes.selected}` : ""}
                // >
                //   {menuItem.icon ? (
                //     <ListItemIcon>{menuItem.icon}</ListItemIcon>
                //   ) : null}

                //   <ListItemText primary={menuItem.text} />
                // </ListItem>
              );
            })}
          </List>
        );
      })}
    </>
  );
}

export default Sidebar;
