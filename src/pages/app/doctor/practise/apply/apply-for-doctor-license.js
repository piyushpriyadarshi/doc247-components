import LicenseApplyForm from "@/Components/doctor/LicenseApplyForm";
import DoctorDashBoard from "@/Components/layout/dashboard/DoctorDasboard";
import React from "react";

function ApplyForLicense() {
  return <LicenseApplyForm />;
}

ApplyForLicense.layout = DoctorDashBoard;
ApplyForLicense.auth = {
  role: ["DOCTOR"],
  loading: "Loading License Form",
};

export default ApplyForLicense;
