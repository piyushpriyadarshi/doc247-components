import { Home, Person } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const bottomNav = [
  {
    text: "Home",
    icon: <Home />,
    url: "/home",
  },
  {
    text: "Search Doctors",
    icon: <SearchIcon />,
    url: "/search/doctor",
  },
  {
    text: "My Account",
    icon: <Person />,
    url: "/me",
  },
];

export default bottomNav;
