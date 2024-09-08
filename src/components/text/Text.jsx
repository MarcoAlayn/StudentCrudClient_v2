import React from "react";
import Typography from "@mui/material/Typography";

const Text = ({ style, text }) => {
  return <Typography sx={style}>{text}</Typography>;
};

export default Text;
