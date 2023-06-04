import * as React from "react";
import { Card, CardMedia, Grid, Typography, Tabs, Tab,Box } from "@mui/material";

export default function FilterCard() {
  return (
    <>
    <Box sx={{position:'fixed',top:'55px',zIndex:2,background:'#fff'}}>
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
          {['Free appointment','Now or Later','Video consult','sort/filters'].map((item, ind) => (
            <Tab
              key={ind}
              disableRipple={false}
              sx={{ margin: 0,padding:'2px 4px' }}
              label={
                <div key={ind}>
                  <Card
                    sx={{
                      margin: 0,
                      borderRadius: { xs: 8, sm: 16 },
                      padding: 2,
                    }}
                    key={ind}
                  >
                      {item}
                  </Card>
                </div>
              }
            />
          ))}
        </Tabs>
      </Grid>
      </Box>
    </>
  );
}
