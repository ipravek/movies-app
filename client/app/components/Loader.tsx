import React from "react";
import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  );
};

export default Loader;
