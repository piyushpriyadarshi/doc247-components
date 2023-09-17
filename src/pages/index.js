import React from "react";
import SignIn from "./login";
import Header from "@/Components/Header";
import { HelloWorld } from "@piyushpriyadarshi/planetschool-uicomponents";

function Index() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "3rem" }}></div>
      <div>
        <HelloWorld />
      </div>
    </>
  );
}

export default Index;
