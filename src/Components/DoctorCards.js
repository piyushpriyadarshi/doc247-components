import * as React from "react";
import { doctorList } from "../utils/predefinedUtils";
import Header from "./Header";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { useRouter } from 'next/router';

export default function DoctorCards() {
  const router = useRouter();
  const handleOnVisit = (item) => {
    router.push({
      pathname: `/search/doctor/booking/${123}`,
      query: { name: item.name }
    })
  }
  return (
    <>
      <Header />
      <Box sx={{ background: "#e8e8e8", marginTop: 16 }}>
        {doctorList.map((item, ind) => {
          return (
            <Paper sx={{ mt: 1, borderRadius: 0 }} key={ind}>
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
                    <Typography
                      sx={{
                        color: "#1faa52",
                        paddingLeft: "6px",
                        marginTop: "2px",
                      }}
                    >
                      {" "}
                      <MessageIcon sx={{ fontSize: '18px' }} />{" "}
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
              <Box sx={{ display: 'flex', marginLeft: '10px', marginTop: '12px', justifyContent: 'space-between' }}>
                <Box>
                  <span style={{ display: 'flex', background: '#538d53', borderRadius: 10, padding: "0px 8px 0px 8px", textAlign: 'center' }}>
                    <Typography sx={{ color: "#fff", marginTop: '6px', paddingLeft: '25%' }}>
                      <ThumbUpIcon sx={{ fontSize: '18px' }} />
                    </Typography>
                    <Typography sx={{ color: "#fff", marginTop: '4px', fontSize: '16px', fontWeight: 600, marginLeft: '4px' }}>
                      97%
                    </Typography>
                  </span>
                  <Typography sx={{ fontSize: '12px', fontWeight: 400, marginTop: '10px', marginLeft: '1px' }}>Patient recommendation</Typography>
                </Box>
                <Box sx={{ paddingRight: 1 }} >
                  <span style={{ display: 'flex', background: '#6060c7', borderRadius: 10, padding: "0px 5px 0px 5px", marginLeft: '4px', textAlign: 'center' }}>
                    <Typography sx={{ color: "#fff", marginTop: '6px', paddingLeft: '25%' }}>
                      <StarOutlineRoundedIcon sx={{ fontSize: '18px' }} />
                    </Typography>
                    <Typography sx={{ color: "#fff", marginTop: '4px', fontSize: '16px', fontWeight: 600, marginLeft: '3px' }}>
                      4.5
                    </Typography>
                  </span>
                  <Typography sx={{ fontSize: '12px', fontWeight: 400, marginTop: '10px', marginLeft: '1px' }}>Clinic Excellence Rating</Typography>
                </Box>
              </Box>
              <Divider sx={{ marginTop: '12px' }} />

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
                <span style={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 14 },
                      fontWeight: 500,
                      color: "#00000",
                      marginLeft: '6px',
                      marginTop: '2px'
                    }}
                  >
                    <CurrencyRupeeIcon sx={{ fontSize: { xs: 12, sm: 12 } }} />
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 11, sm: 14 },
                      fontWeight: 500,
                      color: "#00000",
                    }}
                  >
                    500 Consultation Fees
                  </Typography>
                </span>
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
                  <span style={{ display: 'flex' }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 11, sm: 14 },
                        fontWeight: 500,
                        color: "#00000",
                        marginLeft: '1px',
                        marginTop: '2px'
                      }}
                    >
                      <HomeOutlinedIcon sx={{ fontSize: { xs: 18, sm: 18 } }} />
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 12 },
                        fontWeight: 500,
                        color: "#00000",
                        marginTop: '4px',
                        marginLeft: '1px'
                      }}
                    >
                      11 AM Today
                    </Typography>
                  </span>
                </span>
                <Button
                  sx={{
                    fontSize: { xs: 10, sm: 12 },
                    fontWeight: 600,
                    marginLeft: 2,
                    margin: 2,
                  }}
                  onClick={() => handleOnVisit(item)}
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
