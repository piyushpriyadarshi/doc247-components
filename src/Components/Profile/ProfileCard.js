import { Edit, Email } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function ProfileCard({ onClick, ...other }) {
  return (
    <>
      <Paper elevation={3} sx={{ m: 1 }} {...other}>
        <Card sx={{ p: 0 }}>
          <CardActionArea onClick={onClick}>
            <CardContent sx={{ p: 0 }}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  xs={12}
                  container
                  // spacing={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: 0,
                    p: "0.5rem",
                  }}
                >
                  <Grid item xs={2}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar>P</Avatar>
                    </div>
                  </Grid>
                  <Grid item xs={10}>
                    {/* <div style={{ display: "flex" }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                      Piyush Priyadarshi
                    </Typography>
                    <IconButton>
                      <Edit />
                    </IconButton>
                  </div> */}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Piyush Priyadarshi
                      </Typography>
                      {/* <Edit /> */}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <PhoneIcon />
                      <Typography variant="body">+91 9663117004</Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Email />
                      <Typography variant="body">
                        priyadarship4@gmail.com
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  container
                  sx={{ m: 0, p: "0.5rem" }}
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Paper
                      elevation={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 0,
                        m: 0,
                      }}
                    >
                      <LoyaltyIcon sx={{ margin: "10px" }} />
                      <div>
                        <Typography>Points</Typography>
                        500
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper
                      elevation={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        p: 0,
                        m: 0,
                      }}
                    >
                      <AccountBalanceWalletIcon sx={{ margin: "10px" }} />
                      <div>
                        <Typography>Balance</Typography>
                        500
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </>
  );
}

export default ProfileCard;
