import React from "react";
import Head from "next/head";
import { Box, Paper } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
const Page = ({ children, title = "", meta, ...other }) => {
  return (
    <>
      <Head>
        <title>{`${title} | doc247.in`}</title>
        {meta}
      </Head>

      {/* <ThemeProvider theme={theme}> */}
      <Box sx={{ p: 2 }} {...other} component="main">
        {children}
      </Box>
      {/* </ThemeProvider> */}

      {/* </div> */}
    </>
  );
};

export default Page;
