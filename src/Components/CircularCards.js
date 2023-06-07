import * as React from "react";
import { Card, CardMedia, Grid, Typography, Tabs, Tab } from "@mui/material";

export default function CircularCard({ cardsArray, cardHeading }) {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: 17, sm: 20 },
          fontWeight: 600,
          paddingTop: "14px",
          marginLeft: "11px",
        }}
      >
        {cardHeading}
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
          // allowScrollButtonsMobile
        >
          {cardsArray.map((item, ind) => (
            <Tab
              key={ind}
              disableRipple={false}
              sx={{ margin: 0, padding: "0.5rem" }}
              label={
                <div key={ind}>
                  <Card
                    sx={{
                      margin: 0,
                      width: { xs: 75, sm: 100 },
                      height: { xs: 75, sm: 100 },
                      borderRadius: { xs: 20, sm: 40 },
                      paddingTop: 1,
                    }}
                    key={ind}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt="green iguana"
                      sx={{ height: { xs: 75, sm: 100 } }}
                    />
                  </Card>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: { xs: 14, sm: 14 },
                      fontWeight: 600,
                      paddingTop: 0,
                    }}
                  >
                    {item.name}
                  </Typography>
                </div>
              }
            />
          ))}
        </Tabs>
      </Grid>
    </>
  );
}
