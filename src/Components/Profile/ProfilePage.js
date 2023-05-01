import { Person } from '@mui/icons-material';
import React from 'react'
import { requestRouteChange } from '../../utils/AuthUtils';
import ProfileCard from './ProfileCard';
import ProfileCardLink from './ProfileCardLink'


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

function ProfilePage() {
  return (
    <>
      <ProfileCard
        sx={{ mt: 3 }}
        onClick={() => {
          requestRouteChange("/app/profile/me");
        }}
      />
      {cardlink.map((link, index) => {
        return <ProfileCardLink key={index} cardData={link} />;
      })}
    </>
  );
}

export default ProfilePage