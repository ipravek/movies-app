"use client";
import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import CardComponent from "./CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieData, movieReqStatus, selectMovie } from "@/lib/redux";
import Loader from "./Loader";

export default function Movies() {
  const dispatch = useDispatch();
  const data = useSelector(selectMovie);
  const status = useSelector(movieReqStatus);

  useEffect(() => {
    (() => {
      dispatch(fetchMovieData());
    })();
  }, []);

  return (
    <Container>
      {status == "loading" ? (
        <Loader />
      ) : (
        <Box sx={{ mt: "5.5rem" }}>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {data &&
              data.map((e: any, idx: number) => {
                return (
                  <Grid item key={idx} sx={{ display: "flex" }}>
                    <CardComponent
                      name={e.Title}
                      body={e.Plot}
                      image={e.Images[0]}
                      link={e.Title}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      )}
    </Container>
  );
}
