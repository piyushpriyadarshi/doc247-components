import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import React from "react";

function basicdetails() {
  return <div>basic-details</div>;
}

basicdetails.layout = DoctorDashBoard;
basicdetails.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Dashboard",
};

export default basicdetails;
