import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function LanguageCard({ isSelected, title, onClick }) {
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          border: `2px solid ${isSelected ? "#ffa000" : ""}`,
          // maxWidth: "140px",
        }}
        onClick={() => {
          onClick(title);
        }}
      >
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 4,
            }}
          >
            <Typography>{title}</Typography>
          </CardContent>
          {isSelected && (
            <img
              src="/icons/tick.png"
              alt="selected"
              style={{ position: "absolute", bottom: "0", left: "0" }}
              height="40"
              width="40"
            />
          )}
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default LanguageCard;
