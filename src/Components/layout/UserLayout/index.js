import React from "react";
import Header from "./Header";
import AppLayout from "../AppLayout";
import Sidebar from "./Sidebar";

function UserLayout({ children }) {
  return (
    <AppLayout sidebar={<Sidebar />} header={<Header />}>
      {children}
    </AppLayout>
  );
}

export default UserLayout;
