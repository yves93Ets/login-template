"use client";

import { ThemeOptions } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
};

lightThemeOptions;

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  palette: {
    primary: {
      main: blue[300],
    },
    secondary: {
      main: blue[700],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: 4,
          margin: 2,
        },
      },
    },
  },
});
