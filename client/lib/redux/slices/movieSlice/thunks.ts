import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { fetchData as fd } from "./fetchData";

export const fetchMovieData: any = createAppAsyncThunk(
  "movie/fetchData",
  async () => {
    const response = await fd();
    return response;
  }
);
