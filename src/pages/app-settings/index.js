import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import Page from "../../../components/commons/Page";
// import IndividualPageLayout from "../../../components/layout/IndividualPageLayout";
import LanguageCard from "@/Components/language/LanguageCard";
import IndividualPageLayout from "@/Components/layout/IndividualPageLayout";
import { APP_LANGUAGE } from "@/constant/language/AppLanguage";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme, updateTheme } from "../../../features/theme/themeSlice";

function SelectLanguage() {
  //   const mode = useSelector((state) => state.theme.value);
  //   const dispatch = useDispatch();

  const [language, setLanguage] = React.useState("");
  const [theme, setTheme] = React.useState("light");

  const handleLanguageSelect = (newLang) => {
    setLanguage(newLang);
  };
  const handleThemeSelect = (newTheme) => {
    setTheme(newTheme);
    // dispatch(updateTheme(newTheme));
  };
  return (
    //   <Page sx={{mt:8}}>
    <>
      <Typography variant="h6" sx={{ m: 1 }}>
        Select Your Language
      </Typography>
      <Grid spacing={2} container sx={{ p: 2 }}>
        {APP_LANGUAGE.map((lang) => {
          return (
            <LanguageCard
              isSelected={language === lang?.title}
              title={lang?.title}
              key={lang?.id}
              onClick={handleLanguageSelect}
            />
          );
        })}
      </Grid>

      <Typography variant="h6" sx={{ m: 1 }}>
        Select Your Theme
      </Typography>
      <Grid spacing={2} container sx={{ p: 2 }}>
        {["light", "dark"].map((lang) => {
          return (
            <LanguageCard
              isSelected={theme === lang}
              title={lang}
              key={lang}
              onClick={handleThemeSelect}
            />
          );
        })}
      </Grid>
    </>

    //   </Page>
  );
}
SelectLanguage.layout = IndividualPageLayout;
SelectLanguage.metaData = {
  title: "Select App Language and Theme",
};
export default SelectLanguage;
