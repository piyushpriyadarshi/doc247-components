import Page from "@/Components/commons/Page";
import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import { Typography } from "@mui/material";
import React from "react";

function DoctorSchedulePage() {
  return (
    <Page title="Doctor Schedule" sx={{ m: 5 }}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        distinctio consectetur nemo animi odio neque molestiae numquam ut enim
        reprehenderit magni saepe optio cum illo, sequi eum earum odit adipisci.
      </Typography>
    </Page>
  );
}

DoctorSchedulePage.layout = DoctorDashBoard;
DoctorSchedulePage.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Schedule",
};

export default DoctorSchedulePage;
