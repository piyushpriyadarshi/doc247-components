import { Home, Person } from "@mui/icons-material";

const bottomNav = [
  {
    text: "Home",
    icon: <Home />,
    url: "/home",
  },
  {
    text: "Search Doctors",
    icon: <Person />,
    url: "/search/doctor",
  },
  {
    text: "My Account",
    icon: <Person />,
    url: "/me",
  },
];

export default bottomNav;
