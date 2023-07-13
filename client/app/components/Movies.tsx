"use client";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function Movies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "movies"
        );
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Container>
      <Box sx={{ mt: "5.5rem" }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {data &&
            data.map((e: any, idx) => {
              return (
                <Grid item key={idx} sx={{ display: "flex" }}>
                  <CardComponent
                    name={e.Title}
                    body={e.Plot}
                    image={e.Images[0]}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
}
