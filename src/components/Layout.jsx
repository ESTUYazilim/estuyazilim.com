import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { trTR, enUS } from "@mui/material/locale";
import FlagTR from "../svg/flag-tr.svg";
import FlagUS from "../svg/flag-us.svg";
import { Avatar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../semantics/Footer";
import Navbar from "../semantics/Navbar";

const Layout = (props) => {
  console.log({ props });
  const [darkMode, setDarkMode] = React.useState(true);
  const [localization, setLocalization] = React.useState(true);
  const locale = localization ? enUS : trTR;
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    locale,
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}>
        <Navbar darkMode={darkMode} />
        {props.children}
        <Fab
          sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
            backgroundColor: darkMode ? "black" : "white",
            ":hover": {
              backgroundColor: darkMode ? "gainsboro" : "gray",
            },
          }}>
          <IconButton
            onClick={() => {
              setDarkMode(!darkMode);
            }}>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Fab>
        <Fab
          sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            left: (theme) => theme.spacing(2),
            backgroundColor: "transparent",
            ":hover": {
              backgroundColor: "transparent",
            },
            boxShadow: "none",
          }}>
          <IconButton
            onClick={() => {
              setLocalization(!localization);
            }}>
            {localization ? <Avatar src={FlagUS} /> : <Avatar src={FlagTR} />}
          </IconButton>
        </Fab>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
