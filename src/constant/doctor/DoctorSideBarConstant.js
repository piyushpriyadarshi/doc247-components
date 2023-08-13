import { Settings } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ScheduleIcon from "@mui/icons-material/Schedule";

export const DOCTOR_DASHBORAD_SIDEBAR_MENUS = {
  "App Dashboard": [
    {
      text: "Practice",
      url: `/app/doctor/practise`,
      subroutes: [
        {
          text: "Apply For License",
          url: `/app/doctor/practise/apply/apply-for-doctor-license`,
          icon: <CreditScoreIcon />,
        },
        {
          text: "Update Your Schedule",
          url: `/app/doctor/practise/schedule`,
          icon: <ScheduleIcon />,
        },
        {
          text: "User Reports",
          url: `/app/doctor/practise/reports`,
          icon: <Settings />,
        },
      ],
    },
    {
      text: "Account",
      url: `/app/doctor/account`,
      subroutes: [
        {
          text: "Basic Details",
          url: `/app/doctor/account/basic-details`,
          icon: <Settings />,
        },
        {
          text: "Clinic Details",
          url: `/app/doctor/account/clinic-details`,
          icon: <CreditScoreIcon />,
        },
        {
          text: "Update Your Schedule",
          url: `/app/doctor/schedule`,
          icon: <ScheduleIcon />,
        },
      ],
    },
    {
      text: "User Connect",
      url: `/app/doctor/engagement`,
      subroutes: [
        {
          text: "User Queries",
          url: `/app/doctor/engagement/chats`,
          icon: <Settings />,
        },

        {
          text: "Blogs",
          url: `/app/doctor/engagement/blogs`,
          icon: <Settings />,
        },
        {
          text: "Stories",
          url: `/app/doctor/engagement/stories`,
          icon: <Settings />,
        },
      ],
    },
    {
      text: "App and Web Settings",
      url: `/app/doctor/configure/webapp-setting`,
      subroutes: [
        {
          text: "Web and App Settings",
          url: `/app/doctor/configure/webapp-setting`,
          icon: <Settings />,
        },
      ],
    },
  ],
};
