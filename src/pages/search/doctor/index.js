import DoctorCards from "@/Components/DoctorCards";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import UserLayout from "@/Components/layout/UserLayout";
import React from "react";
import FilterCards from '../../../Components/Filtercards'

function DoctorSearch() {

  return (
    <>
      <FilterCards />
      <DoctorCards />
    </>
  )
}

DoctorSearch.layout = IndividualPageLayout;
DoctorSearch.metaData = {
  title: "Doctor In city",
};
export default DoctorSearch;
