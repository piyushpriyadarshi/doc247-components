import {
  AppBar,
  Card,
  Grid,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MicIcon from "@mui/icons-material/Mic";

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
function Chat() {
  const router = useRouter();
  console.log(router.query);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <ArrowBackIcon
            onClick={() => {
              router.back();
            }}
          />
          <div style={{ marginLeft: "1rem" }}>
            <img
              src={"https://placeimg.com/500/500/any"}
              alt=""
              height="49"
              width="49"
              style={{ borderRadius: "30px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              width: "100vw",
            }}
          >
            <div style={{ padding: "20px", flex: 1 }}>Anjali</div>
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-around",
                flex: 1,
              }}
            >
              <div>
                <VideocamIcon />
              </div>

              <div>
                <CallIcon />
              </div>

              <MoreVertIcon />
            </div>
          </div>
          {/* <Grid container sx={{border:'2px solid green'}}>
            <Grid item sx={{ flex: 1 }}>Anjali</Grid>
            <Grid item sx={{ flex: 1}}>
             
            </Grid>
          </Grid> */}
        </Toolbar>
      </AppBar>
      <div></div>
      <Card
        elevation={2}
        sx={{
          position: "fixed",
          bottom: "0",
          // border: "2px solid green",
          width: "100vw",
          zIndex: "100",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={10}
            sx={{
              // borderRadius: "2rem",
              border: "2px solid green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "2.5rem",
              padding: "10px",
            }}
          >
            <InsertEmoticonIcon />
            <InputBase sx={{ flex: 1 }} placeholder="Message" />
            <CurrencyRupeeIcon />
            <PhotoCameraIcon width="100" />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "3rem",
              backgroundColor: "#075E54",
            }}
          >
            <div>
              <MicIcon />
            </div>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
}

export default Chat;
