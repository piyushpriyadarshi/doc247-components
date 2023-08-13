import React from "react";
import Home from "./home";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import UserLayout from "@/Components/layout/UserLayout";

function WelcomePage() {
  return <Home />;
}

WelcomePage.layout = UserLayout;
WelcomePage.metaData = {
  title: "Doc247",
};
export default WelcomePage;
