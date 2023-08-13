import ProfilePage from "@/Components/Profile/ProfilePage";
import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import React from "react";

function DoctorProfilePage() {
  return <ProfilePage />;
}

DoctorProfilePage.layout = DoctorDashBoard;
DoctorProfilePage.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Settings",
};
export default DoctorProfilePage;
