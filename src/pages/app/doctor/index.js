import BugForm from "@/Components/commons/bugform/BugForm";
import DoctorDashBoardHome from "@/Components/doctor/DoctorDashBoardHome";
import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import DoctorDashboard1 from "@/pages/doctordashboard";
import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

function Doctor() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <>
      <DoctorDashBoardHome />
    </>
  );
}

Doctor.layout = DoctorDashBoard;
Doctor.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Dashboard",
};

export default Doctor;
