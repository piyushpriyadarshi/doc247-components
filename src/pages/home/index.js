import React, { useEffect, useState } from "react";
import Cards from "@/Components/cards";
import CircularCards from "@/Components/CircularCards";
import ScreenTest from "@/Components/ScreeningTest";
import Footer from "@/Components/Footer";
import Divider from "@mui/material/Divider";
import {
  cardsArray,
  screenTests,
  circularCardsArray,
  notFeelingwell,
  Texts,
  specialities,
} from "@/utils/predefinedUtils";
import UserLayout from "@/Components/layout/UserLayout";
import { Button, Paper, Typography } from "@mui/material";
import { Geolocation } from "@capacitor/geolocation";
function Home() {
  const [coord, setcoord] = useState({ latitude: "" });
  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 1,
    });
    setcoord({
      latitude: coordinates?.coords?.latitude,
      longitude: coordinates?.coords?.longitude,
    });
    // console.log("Current position:", coordinates?.coords?.latitude);
  };
  useEffect(() => {
    console.log(coord);
    // alert(JSON.stringify(coord));
  }, [coord]);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return (d * 1000).toFixed(2);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  // console.log(coord);
  return (
    <Paper>
      <Cards cardsArray={cardsArray} Heading={"Our Offerings"} isFirst={true} />
      <Button onClick={printCurrentPosition} variant="contained">
        Get Location
      </Button>

      <Typography>{coord?.latitude}</Typography>
      <Typography>{coord?.longitude}</Typography>

      {coord?.latitude && coord?.longitude && (
        <Typography>
          you are{" "}
          {getDistanceFromLatLonInKm(
            coord?.latitude,
            coord?.longitude,
            25.631040914005347,
            85.33252856382887
          )}
          metre away from your home
        </Typography>
      )}
      {/* <Cards
        cardsArray={specialities}
        Heading={"Find doctors in top specialities"}
      />
      <CircularCards
        cardsArray={circularCardsArray}
        cardHeading={"Any Symptoms?"}
      />
      <Divider sx={{ paddingTop: 2 }} variant="middle" />
      <ScreenTest
        cardsArray={screenTests}
        cardHeading={Texts.ST_HEADING}
        cardSubHeading={Texts.ST_SUB_HEADING}
      />
      <CircularCards
        cardsArray={notFeelingwell}
        cardHeading={"Not Feeling well?"}
      />
      <Divider sx={{ paddingTop: 1 }} variant="middle" /> */}
      <Footer />
    </Paper>
  );
}

Home.layout = UserLayout;

export default Home;
