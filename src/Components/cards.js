import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { useRouter } from "next/router";

export default function generalCard({ cardsArray, Heading, isFirst }) {
  const router = useRouter();
  return (
    <div style={{ marginTop: isFirst ? "70px" : "14px" }}>
      <Typography sx={{ marginLeft: "12px", fontSize: 17, fontWeight: 600 }}>
        {Heading}
      </Typography>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{
            style: { transition: "none", display: "none" },
          }}
          sx={{ overflowX: "auto" }}
          value={0}
          allowScrollButtonsMobile
        >
          {cardsArray.map((item, index) => (
            <Tab
              key={index}
              disableRipple={false}
              sx={{ margin: 0, padding: "0.5rem" }}
              label={
                <Card
                  sx={{ margin: 0, width: { xs: 145, sm: 160 } }}
                  onClick={() =>
                    router.push({
                      pathname: "/appointment",
                      state: {
                        name: "rahul",
                      },
                    })
                  }
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="green iguana"
                    sx={{
                      margin: 2,
                      height: { xs: 125, sm: 130 },
                      width: { xs: 145, sm: 160 },
                      margin: 0,
                    }}
                  />
                  <CardContent
                    sx={{
                      height: { xs: 40, sm: 40 },
                      width: { xs: 145, sm: 160 },
                      padding: 0,
                      background: "#fff",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#00000",
                        fontSize: { xs: 12, sm: 13 },
                        fontWeight: 600,
                        paddingTop: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              }
            />
          ))}
        </Tabs>
      </Grid>
    </div>
  );
}
