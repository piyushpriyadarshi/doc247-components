import React from "react";
import DoctorSignUp from "./registerasdoctor";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";

function Signup() {
  return <DoctorSignUp />;
}

Signup.layout = IndividualPageLayout;
Signup.metaData = {
  title: "Register",
};
export default Signup;
