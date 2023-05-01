import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function ScreenTest({
  cardsArray,
  cardHeading,
  cardSubHeading,
}) {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 13, sm: 20 },
            fontWeight: 600,
            paddingTop: 2,
            marginLeft: 1,
          }}
        >
          {cardHeading}
        </Typography>
        {cardSubHeading && (
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 20 },
              fontWeight: 700,
              marginLeft: 1,
            }}
          >
            {cardSubHeading}
          </Typography>
        )}
      </Box>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {cardsArray.map((item, ind) => {
          return (
            <Card sx={{ margin: 2 }} key={ind}>
              <CardActionArea sx={{ pb: 6 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="green iguana"
                  sx={{ height: { xs: 85, sm: 140 } }}
                />
                <CardContent sx={{ height: { xs: 50, sm: 50 } }}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: { xs: 12, sm: 14 },
                      fontWeight: 600,
                      paddingTop: 1,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "green",
                      fontSize: { xs: 12, sm: 14 },
                      fontWeight: 600,
                      paddingTop: 0,
                    }}
                  >
                    {`starting from Rs ${item.price}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}
