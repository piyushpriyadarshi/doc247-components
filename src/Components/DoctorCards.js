import * as React from "react";
import Typography from "@mui/material/Typography";
import { doctorList } from "../utils/predefinedUtils";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Header from "./Header";

export default function DoctorCards() {
  return (
    <>
      <Header />
      <Box sx={{ background: "#e0d8d8", marginTop: 8 }}>
        {doctorList.map((item, ind) => {
          return (
            <Paper sx={{ marginTop: "3px" }} key={ind}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                    margin: 8,
                  }}
                  src={item.image}
                  alt="rahul"
                ></img>
                <div>
                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 14 },
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
                      fontSize: { xs: 10, sm: 12 },
                      fontWeight: 600,
                      padding: 1,
                      color: "#00000",
                    }}
                  >
                    {item.type}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 12 },
                      fontWeight: 600,
                      paddingLeft: 1,
                      color: "#00000",
                    }}
                  >
                    {item.Exp} yr Exp
                  </Typography>
                </div>
              </div>
              <Divider />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 12 },
                      fontWeight: 600,
                      padding: 1,
                      color: "#00000",
                    }}
                  >
                    {item.Add}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 12 },
                      fontWeight: 600,
                      paddingLeft: 1,
                      color: "#00000",
                    }}
                  >
                    Consultation charge {item.fee}
                  </Typography>
                </div>
                <div>
                  <Button
                    sx={{
                      fontSize: { xs: 8, sm: 12 },
                      fontWeight: 600,
                      marginLeft: 2,
                      margin: 2,
                    }}
                    variant="contained"
                  >
                    Book Clinic Visit
                  </Button>
                </div>
              </div>
              <Divider />
            </Paper>
          );
        })}
      </Box>
    </>
  );
}
