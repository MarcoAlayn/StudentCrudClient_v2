import { Button as MUIButton } from "@mui/material";
import React from "react";
import { btnStyles } from "./ButtonStyles";

const Button = ({ style, children }) => {
  return <MUIButton sx={style}>{children}</MUIButton>;
};

export default Button;
