import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import {useNavigate} from "react-router-dom"
// import Link from 'next/link';
import { useRouter } from "next/navigation";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Head from "next/head";

export default function SimplePaper() {
  // const navigate = useNavigate();
  const router = useRouter();
  const [value, setValue] = useState(dayjs(Date.now()));
  const timeSlots = ["Morning(10AM-1PM)", "Noon(2PM-4PM)", "Evening(6PM-9PM)"];
  console.log("value....", value);
  const finalDate = (day) => {
    console.log("day......", day);
    if (day == 0) return "Sunday";
    if (day == 1) return "Monday";
    if (day == 2) return "Tuesday";
    if (day == 3) return "Wednesday";
    if (day == 4) return "Thursday";
    if (day == 5) return "Friday";
    if (day == 6) return "Saturday";
  };
  const finalMonth = (month) => {
    if (month == 1) return "Jan";
    if (month == 2) return "Feb";
    if (month == 3) return "Mar";
    if (month == 4) return "Apr";
    if (month == 5) return "May";
    if (month == 6) return "June";
    if (month == 7) return "Jul";
    if (month == 8) return "Aug";
    if (month == 9) return "Sep";
    if (month == 10) return "Oct";
    if (month == 11) return "Nov";
    if (month == 12) return "Dec";
  };
  // const scheduleHandle =()=>{
  //     console.log("here...........")
  //     return <Link href="/dashboard"/>
  // }
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          // flexWrap: 'wrap',
          "& > :not(style)": {
            margin: "auto",
            marginTop: "20px",
            width: { xs: "100%", sm: "100%" },
            height: 458,
            marginTop: 9,
          },
        }}
      >
        <div style={{ display: "flex" }}>
          {/* <span style={{ margin: '30px' }}> Dr.Ankit Sharma (cardiologist)</span> */}
          <div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "20px",
                marginLeft: "20%",
                marginTop: "200px",
              }}
            >
              Select a Date & Time
            </span>
            <span style={{ margin: "200px", marginTop: "10%" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  sx={{
                    "& .MuiButtonBase-root": {
                      padding: "18px",
                    },
                    ".MuiPickersCalendarHeader-root": {
                      padding: "10px",
                      paddingLeft: "20px",
                      width: "300px",
                    },
                    ".MuiTypography-root-MuiDayCalendar-weekDayLabel": {
                      width: "200px",
                    },
                  }}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
            </span>
          </div>
          <div
            style={{
              margin: "30px",
              display: "grid",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            <Typography>
              {finalDate(value.$W)} {finalMonth(value.$M + 1)} {value.$D}{" "}
            </Typography>
            {timeSlots.map((item, ind) => (
              <Button
                style={{ minWidth: "200px", fontWeight: 700, height: "50px" }}
                variant="outlined"
                size="medium"
                onClick={() =>
                  router.push({
                    pathname: "/confirmation",
                    state: {
                      name: "rahul",
                    },
                  })
                }
                key={ind}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
}
