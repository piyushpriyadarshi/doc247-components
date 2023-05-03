import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Tabs,
  Tab,
  Box
} from "@mui/material";

export default function ScreenTest({
  cardsArray,
  cardHeading,
}) {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 17, sm: 20 },
            fontWeight: 600,
            paddingTop: 2,
            marginLeft: '12px',
          }}
        >
          {cardHeading}
        </Typography>
      </Box>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between",paddingTop:1 }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          TabIndicatorProps={{
            style: { transition: "none", display: "none" },
          }}
          sx={{ overflowX: 'auto' }}
          value={3}
        >
          {cardsArray.map((item, ind) => (
            <Tab
              key={ind}
              disableRipple={false}
              sx={{ margin: 0, padding: "0.5rem" }}
              label={
                <Card sx={{ margin: 0,height: { xs: 195, sm: 200 }, width: { xs: 185, sm: 200 }}} key={ind}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="green iguana"
                    sx={{ height: { xs: 125, sm: 200 }, width: { xs: 185, sm: 200 } }}
                  />
                  <CardContent sx={{ height: { xs: 45, sm: 50 } }}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: { xs: 12, sm: 12 },
                        fontWeight: 600,
                        paddingTop: 0,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "green",
                        fontSize: { xs: 12, sm: 12 },
                        fontWeight: 600,
                        paddingTop: 0,
                      }}
                    >
                      {`starting from Rs ${item.price}`}
                    </Typography>
                  </CardContent>
              </Card>
              }
            />
          ))}
        </Tabs>
      </Grid>
    </>
  );
}
