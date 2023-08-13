import React from "react";
import AppLayout from "../../AppLayout";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DoctorDashBoard({ children }) {
  return (
    <AppLayout sidebar={<Sidebar />} header={<Header />}>
      {children}
    </AppLayout>
  );
}

export default DoctorDashBoard;
