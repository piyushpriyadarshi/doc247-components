import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Paper } from "@mui/material";
import ProfileCardLink from "@/Components/Profile/ProfileCardLink";
import SearchBar from "../SearchBar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const arr = ["In person Consulation ", "Video Consultation", "Surgeries"];

export default function FullScreenDialog({ open, onClose }) {
  console.log("opened");
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }} color="default">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                ml: 2,
              }}
              variant="h6"
              component="div"
            >
              Search
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2 }}>
        <SearchBar
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        {/* <ProfileCardLink /> */}
        <div style={{ marginTop: "3rem" }}>
          <Typography variant="h5" component="h3">
            what are you searching for?
          </Typography>
          {arr.map((data, index) => {
            return (
              <Paper
                key={index}
                sx={{ borderRadius: 2, p: 2, mt: 2, mr: 2, ml: 2 }}
                elevation={1}
              >
                {data}
              </Paper>
            );
          })}
        </div>
      </Box>
    </Dialog>
  );
}
