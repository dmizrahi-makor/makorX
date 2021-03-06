import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = ({ value }) => {
  return <LinearProgress variant="determinate" value={value} />;
};

export default ProgressBar;
