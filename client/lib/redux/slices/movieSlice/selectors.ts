import type { ReduxState } from "@/lib/redux";

export const selectMovie = (state: ReduxState) => state.movie.data;
export const movieReqStatus = (state: ReduxState) => state.movie.status;
