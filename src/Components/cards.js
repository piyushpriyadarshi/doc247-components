/* eslint-disable react/jsx-key */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import ButtonBase from '@material-ui/core/ButtonBase';

import { useRouter } from "next/navigation";

export default function ActionAreaCard({ cardsArray }) {
  const router = useRouter();
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {cardsArray.map((item, ind) => {
        return (
          <Card
            sx={{
              margin: 2,
              width: { xs: 65, sm: 135 },
              borderRadius: { xs: 3, sm: 6 },
            }}
            onClick={() =>
              router.push({
                pathname: "/appointment",
                state: {
                  name: "rahul",
                },
              })
            }
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.image}
                alt="green iguana"
                sx={{ margin: 2, height: { xs: 65, sm: 130 }, margin: 0 }}
              />
              <CardContent
                sx={{
                  height: { xs: 40, sm: 40 },
                  padding: 0,
                  background: "#566984cc",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#00000",
                    fontSize: { xs: 10, sm: 12 },
                    fontWeight: 600,
                    paddingTop: 1,
                  }}
                >
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
