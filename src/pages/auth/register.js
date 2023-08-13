import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import RegisterForm from "@/sections/auth/register/RegisterForm";
import React from "react";

function RegisterAsSchool() {
  return <RegisterForm />;
}

RegisterAsSchool.layout = IndividualPageLayout;
RegisterAsSchool.metaData = {
  title: "Register your School",
};
export default RegisterAsSchool;
