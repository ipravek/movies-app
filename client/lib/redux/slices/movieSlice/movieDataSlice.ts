import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieData } from "./thunks";

const initialState: DataSlice = {
  data: [],
  status: "idle",
  error: "",
};

export const movieDataSlice = createSlice({
  name: "movie",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchMovieData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface DataSlice {
  data: any;
  status: "idle" | "loading" | "failed" | "success";
  error: string;
}
