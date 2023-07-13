"use client";
import { Box, Grid, Paper } from "@mui/material";
import { Counter } from "./components/Counter/Counter";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Movies />
    </>
  );
}

export const metadata = {
  title: "Movie App",
};
