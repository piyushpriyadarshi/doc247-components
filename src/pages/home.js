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
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

function Home() {
  return (
    <Paper>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#fff",
          zIndex: 101,
          m: 1,
          mt: 1,
          mr: 3,
          mb: 3,
          borderRadius: "2rem",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            borderRadius: "2rem",
            pl: 2,
            p: 1.5,
          }}
        >
          <InputBase
            fullWidth
            elevation={3}
            placeholder="search for doctors "
          />
        </Paper>
      </Box>

      <Grid container spacing={2} sx={{ pt: 10 }}>
        {cardsArray.map((item, ind) => {
          return (
            <Grid item key={ind} xs={6} md={3}>
              <Card>
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
            </Grid>
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
