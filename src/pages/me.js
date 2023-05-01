import ProfileCard from "@/Components/Profile/ProfileCard";
import ProfileCardLink from "@/Components/Profile/ProfileCardLink";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import { Logout, Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const cardlink = [
  {
    icon: <Person />,
    url: "/profile/me",
    text: "My Profile",
  },
  {
    icon: <Person />,
    url: "/profile/me",
    text: "Loyalty",
  },
  {
    icon: <Person />,
    url: "/profile/me",
    text: "Wallet",
  },
  {
    icon: <Person />,
    url: "/profile/me",
    text: "Recharge History",
  },
];

function Me() {
  return (
    <div>
      <ProfileCard sx={{ mt: 8 }} />

      {cardlink.map((link, index) => {
        return <ProfileCardLink key={index} cardData={link} />;
      })}

      <Button
        startIcon={<Logout />}
        variant="contained"
        fullWidth
        // onClick={() => doSignOut()}
      >
        Logout
      </Button>
    </div>
  );
}

Me.layout = IndividualPageLayout;
Me.metaData = {
  title: "my user profile",
};
export default Me;
