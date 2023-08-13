import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import React from "react";

function clinicdetails() {
  return <div>clinic-detail</div>;
}

clinicdetails.layout = DoctorDashBoard;
clinicdetails.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Dashboard",
};
export default clinicdetails;
