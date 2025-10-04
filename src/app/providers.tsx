"use client";

import { PropsWithChildren } from "react";
import { ColorModeContext, useMode } from "./scenes/theme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const Providers = ({ children }: PropsWithChildren) => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <MuiGlobalStyles
            styles={{
              "*": {
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
              },
              "html, body": {
                height: "100%",
                width: "100%",
              },
              body: {
                fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              },
              "#__next": {
                height: "100%",
              },
            }}
          />
          {children}
        </MuiThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Providers;
