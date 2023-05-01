import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useSelector } from "react-redux";

function AppList({
  listData,
  isListItemSelected,
  onSelectedUrl,
  isListSelected,
}) {
  const [open, setOpen] = React.useState(true);
  const theme = useSelector((state) => state.theme.value);
  console.log(theme);

  const handleClick = () => {
    setOpen(!open);
  };
  const isAppListAccordion = () => {
    if (listData?.subroutes) {
      return <>{open ? <ExpandLess /> : <ExpandMore />}</>;
    }
  };

  return (
    <>
      <ListItemButton
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
        <ListItemIcon>{listData?.icon}</ListItemIcon>
        <ListItemText primary={listData?.text} />
        {isAppListAccordion()}
      </ListItemButton>
      {listData?.subroutes && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {listData?.subroutes.map((subroute, index) => {
              const isSelected = isListItemSelected(
                subroute.text,
                subroute.url
              );
              console.log(isSelected);
              return (
                <ListItemButton
                  sx={{ pl: 4 }}
                  key={index}
                  onClick={() => {
                    onSelectedUrl(subroute.text, subroute.url);
                  }}
                  className={isSelected ? `${classes.selected}` : ""}
                >
                  <ListItemIcon>{subroute?.icon}</ListItemIcon>
                  <ListItemText primary={subroute.text} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default AppList;
