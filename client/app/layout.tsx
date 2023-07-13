"use client";
import { Providers } from "@/lib/providers";
import "./styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#db0000" },
    secondary: { main: "#000000" },
  },
});

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <body>{props.children}</body>
        </html>
      </ThemeProvider>
    </Providers>
  );
}

export const metadata = {
  title: "Movie App",
};
