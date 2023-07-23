"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function MovieDetail() {
  const router = useRouter();

  console.log(router);

  return <Box>Yay</Box>;
}
