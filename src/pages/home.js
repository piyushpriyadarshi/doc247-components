import * as React from "react";
import Cards from "../Components/cards";
import FirstHeader from "../Components/FirstHeader";
import CircularCards from "../Components/CircularCards";
import ScreenTest from "@/Components/ScreeningTest";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Divider from "@mui/material/Divider";
import {
  cardsArray,
  screenTests,
  circularCardsArray,
  notFeelingwell,
  Texts,
} from "../utils/predefinedUtils";
import UserLayout from "@/Components/layout/UserLayout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

function Home() {
  return (
    <Paper>
      <Grid container>
        {cardsArray.map((item, ind) => {
          return (
            <Card key={ind}>
              <CardHeader title="Test"></CardHeader>
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
        {/* <Grid item sx={{ xs: 12, border: "2px solid red" }} xs={6}>
        <Card>
          <CardHeader title="Test"></CardHeader>
        </Card>
      </Grid> */}
      </Grid>

      <Divider variant="middle" />
      <ScreenTest
        cardsArray={screenTests}
        cardHeading={Texts.ST_HEADING}
        cardSubHeading={Texts.ST_SUB_HEADING}
      />
      <Footer />
    </Paper>
  );
}

Home.layout = UserLayout;

export default Home;
