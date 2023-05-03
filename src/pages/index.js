import * as React from "react";
import Cards from "../Components/cards";
import CircularCards from "../Components/CircularCards";
import ScreenTest from "@/Components/ScreeningTest";
import Footer from "@/Components/Footer";
import Divider from "@mui/material/Divider";
import {
  cardsArray,
  screenTests,
  circularCardsArray,
  notFeelingwell,
  Texts,
  specialities
} from "../utils/predefinedUtils";
import UserLayout from "@/Components/layout/UserLayout";
import {
  Paper,
} from "@mui/material";

function Home() {
  return (
    <Paper>
      <Cards cardsArray={cardsArray} Heading={"Our Offerings"} isFirst={true} />
      <Cards cardsArray={specialities} Heading={"Find doctors in top specialities"} />
      <CircularCards cardsArray={circularCardsArray} cardHeading={'Any Symptoms?'} />
      <Divider sx={{ paddingTop: 2 }} variant="middle" />
      <ScreenTest
        cardsArray={screenTests}
        cardHeading={Texts.ST_HEADING}
        cardSubHeading={Texts.ST_SUB_HEADING}
      />
      <CircularCards cardsArray={notFeelingwell} cardHeading={'Not Feeling well?'} />
      <Divider sx={{ paddingTop: 1 }} variant="middle" />
      <Footer />
    </Paper>
  );
}

Home.layout = UserLayout;

export default Home;
