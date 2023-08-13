import React from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import classes from "../../layout/dashboard/DoctorDasboard/sidebar.module.css";
import { STYLE_CONSTANT } from "@/constant/StyleConstant";

function AppList({
  listData,
  isListItemSelected,
  onSelectedUrl,
  isListSelected,
  isAppListMenuOpen,
}) {
  const [open, setOpen] = React.useState(isAppListMenuOpen || false);

  const handleClick = () => {
    setOpen(!open);
  };
  const isAppListAccordion = () => {
    if (listData?.subroutes) {
      return (
        <>
          <KeyboardArrowRightIcon
            className={open ? `${classes.expandNormalIcon}` : ""}
          />
        </>
      );
    }
  };

  return (
    <>
      <ListItemButton
        key={listData}
        sx={{ py: 0, minHeight: 32, margin: "5px 10px 5px 10px" }}
        onClick={() => {
          if (listData?.subroutes) {
            handleClick();
          } else {
            onSelectedUrl(listData.text, listData.url);
          }
        }}
        className={`${isListSelected ? classes.selected : ""} ${
          classes.listItem
        }`}
      >
        <ListItemText
          primary={listData?.text}
          primaryTypographyProps={{
            fontSize: isListSelected || open ? 16 : 13,
            fontWeight: "medium",
          }}
          className={classes.sidebarListText}
        />
        {isAppListAccordion()}
      </ListItemButton>
      {listData?.subroutes && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ margin: "5px 10px 5px 20px" }}
        >
          {listData?.subroutes.map((subroute, index) => {
            const isSelected = isListItemSelected(subroute.text, subroute.url);
            return (
              <ListItemButton
                key={subroute.label}
                sx={{
                  py: 0,
                  minHeight: 32,
                  color: isSelected
                    ? STYLE_CONSTANT?.color?.primaryColor
                    : "inherit",
                  margin: "5px 5px 5px 5px",
                }}
                onClick={() => {
                  onSelectedUrl(subroute.text, subroute.url);
                }}
                className={isSelected ? `${classes.selected}` : ""}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: "15px" }}>
                  {subroute.icon}
                </ListItemIcon>
                <ListItemText
                  primary={subroute.text}
                  primaryTypographyProps={{
                    fontSize: isSelected ? 13 : 13,
                    fontWeight: isSelected ? "medium" : "normal",
                  }}
                  sx={{ ml: 1 }}
                />
              </ListItemButton>
            );
          })}
        </Collapse>
      )}
    </>
  );
}

export default AppList;
