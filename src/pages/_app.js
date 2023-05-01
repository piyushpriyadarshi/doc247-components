import React from "react";
// import { SessionProvider } from "next-auth/react";
// import Auth from "../components/Auth";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";

import { CssBaseline } from "@mui/material";
import Spinner from "@/Components/spinner";
import "@/styles/globals.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffa000",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffa000",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  shape: {
    borderRadius: 10,
  },
});
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  // const apptheme = useSelector((state) => state.theme.value);

  const pageLoadingStart = () => {
    setLoading(true);
  };
  const pageLoadingEnd = () => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  };
  const handleRouteChange = (url) => {
    setTimeout(() => {
      setLoading(false);
    }, 0);

    // const data = new PageView(url, "pageView");
    // MixPanel.track("pageloaded", data);
  };
  React.useEffect(() => {
    router.events.on("routeChangeStart", pageLoadingStart);
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", pageLoadingEnd);
    const theme = localStorage.getItem("ipj_theme");

    // console.log(theme);

    let mode = null;
    // if (process.browser) {
    //   mode = localStorage.getItem("ipj_theme");
    //   if (mode !== apptheme) {
    //     // dispatch(updateTheme(mode));
    //   }
    // }
    return () => {
      router.events.off("routeChangeStart", pageLoadingStart);
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("routeChangeError", pageLoadingEnd);
    };
  }, [router.events]);

  // console.log(theme);
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      {/* <SessionProvider session={session}> */}
      {loading && <Spinner open={loading} message="please wait" />}
      {Component.auth ? (
        // <Auth
        //   role={Component?.auth?.role}
        //   loadingMessage={Component?.auth?.loading}
        // >
        <>
          {/* <Header /> */}
          {Component.layout ? (
            <Component.layout>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Head>
              <Component {...pageProps} />
              <Toaster position="top-center" reverseOrder={false} />
            </Component.layout>
          ) : (
            <>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Head>
              <Component {...pageProps} />

              <Toaster position="top-center" reverseOrder={false} />
            </>
          )}
        </>
      ) : (
        // </Auth>
        <>
          {Component.layout ? (
            <Component.layout metaData={Component?.metaData}>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Head>
              <Component {...pageProps} />

              <Toaster position="top-center" reverseOrder={false} />
            </Component.layout>
          ) : (
            <>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Head>
              <Component {...pageProps} />

              <Toaster position="top-center" reverseOrder={false} />
            </>
          )}
        </>
      )}
      {/* </SessionProvider> */}
      {/* </Provider> */}
    </ThemeProvider>
  );
}

export default MyApp;
