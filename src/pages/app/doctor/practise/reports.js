import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import React from "react";

function reports() {
  return <div>reports</div>;
}

reports.layout = DoctorDashBoard;
reports.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Schedule",
};
export default reports;
