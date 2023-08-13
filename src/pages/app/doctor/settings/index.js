import DoctorSetting from "@/Components/doctor/settings/DoctorSetting";
import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import React from "react";

function DoctorSettingPage() {
  return <DoctorSetting />;
}

DoctorSettingPage.layout = DoctorDashBoard;
DoctorSettingPage.auth = {
  role: ["DOCTOR"],
  loading: "Loading Doctors Settings",
};
export default DoctorSettingPage;
