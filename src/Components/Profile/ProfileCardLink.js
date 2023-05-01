import { ArrowRightAltSharp, Person } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  List,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function ProfileCardLink({ cardData }) {
  return (
    <Card sx={{ mt: 2 }}>
      <CardActionArea>
        <CardContent sx={{ p: 2 }}>
          <div style={{ display: "flex" }}>
            {cardData?.icon}
            <Typography sx={{ flexGrow: 1, ml: 1 }}>
              {cardData?.text}
            </Typography>
            <ArrowForwardIosRoundedIcon />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProfileCardLink;
