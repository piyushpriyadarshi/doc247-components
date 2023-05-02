import * as React from "react";
import { doctorList } from "../utils/predefinedUtils";
import Header from "./Header";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

export default function DoctorCards() {
  return (
    <>
      <Header />
      <Box sx={{ background: "#e0d8d8", marginTop: 8 }}>
        {doctorList.map((item, ind) => {
          return (
            <Paper sx={{ mt: 1 }} key={ind}>
              <Box style={{ display: "flex" }}>
                <img
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    margin: 8,
                  }}
                  src={item.image}
                  alt="rahul"
                ></img>
                <div>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 18 },
                      fontWeight: 600,
                      paddingTop: 1,
                      paddingLeft: 1,
                      color: "#00000",
                    }}
                  >
                    Dr. {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 13 },
                      fontWeight: 500,
                      paddingLeft: 1,
                      color: "#5f5e5e",
                      paddingTop: -5,
                    }}
                  >
                    {item.type}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 13 },
                      fontWeight: 500,
                      paddingLeft: 1,
                      color: "#5f5e5e",
                      paddingBottom: 1,
                    }}
                  >
                    {item.Exp} years experience
                  </Typography>
                  <span
                    style={{
                      paddingLeft: 1,
                      paddingBottom: 1,
                      display: "flex",
                    }}
                  >
                    <Typography sx={{ color: "#1faa52" }}>
                      {" "}
                      <ThumbUpIcon />{" "}
                    </Typography>
                    <Typography
                      sx={{
                        paddingLeft: "4px",
                        fontSize: { xs: 14, sm: 14 },
                        fontWeight: 600,
                        marginTop: { xs: "2px", sm: "2px" },
                      }}
                    >
                      {" "}
                      97%{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1faa52",
                        paddingLeft: "8px",
                        marginTop: "2px",
                      }}
                    >
                      {" "}
                      <MessageIcon />{" "}
                    </Typography>
                    <Typography
                      sx={{
                        paddingLeft: "2px",
                        fontSize: { xs: 14, sm: 14 },
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      126 Patient stories{" "}
                    </Typography>
                  </span>
                </div>
              </Box>
              <Divider />

              <Box>
                <span style={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 14 },
                      fontWeight: 600,
                      padding: 1,
                      color: "#00000",
                    }}
                  >
                    {item.Add}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 14 },
                      fontWeight: 500,
                      padding: 1,
                      paddingLeft: 0,
                      color: "#5f5e5e",
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: 9 }} /> Dr. Jatin
                    Dental perfection
                  </Typography>
                </span>
                <span style={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 14 },
                      fontWeight: 500,
                      paddingLeft: 1,
                      color: "#1faa52",
                    }}
                  >
                    Next opens today at 10:30 AM
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 14 },
                      fontWeight: 500,
                      paddingLeft: 1,
                      color: "#5f5e5e",
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: 9 }} /> Updated today
                  </Typography>
                </span>
                <Typography
                  sx={{
                    fontSize: { xs: 11, sm: 14 },
                    fontWeight: 500,
                    padding: 1,
                    paddingTop: 0,
                    color: "#00000",
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: { xs: 12, sm: 12 } }} />
                  500 Consultation Fees
                </Typography>
              </Box>
              <Divider />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ marginTop: 8, paddingLeft: 8 }}>
                  <Typography
                    sx={{ color: "#1faa52", fontSize: 13, fontWeight: 600 }}
                  >
                    NEXT AVAILABLE AT
                  </Typography>
                  <Typography
                    sx={{ color: "#00000", fontSize: 13, fontWeight: 500 }}
                  >
                    <HomeOutlinedIcon sx={{ fontSize: { xs: 14, sm: 14 } }} />
                    11 AM, Today
                  </Typography>
                </span>
                <Button
                  sx={{
                    fontSize: { xs: 10, sm: 12 },
                    fontWeight: 600,
                    marginLeft: 2,
                    margin: 2,
                  }}
                  variant="contained"
                >
                  Book Clinic Visit
                </Button>
              </Box>
              <Divider />
            </Paper>
          );
        })}
      </Box>
    </>
  );
}
