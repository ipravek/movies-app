"use client";
import {
  AppBar,
  Box,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import MF from "@/public/MF.png";
import MFW from "@/public/MFW.png";
import Image from "next/image";

// HOC
function HideOnScroll(props: any) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, pb: "2rem" }}>
      <HideOnScroll>
        <AppBar
          sx={{
            height: "70px",
            bgcolor: "primary.main",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image src={MFW} alt="" height={30} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
