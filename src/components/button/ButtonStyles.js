import { Button, styled } from "@mui/material";
import colors from "../../utils/colors";

export const Primary = styled(Button)(({}) => ({
  width: "210px",
  height: "40px",
  padding: "9px 0px 11px 0px",
  borderRadius: "15px",
  fontFamily: "Mulish",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "20.08px",
  textAlign: "center",
  textTransform: "capitalize",
  backgroundColor: colors.blue,
  color: "#FFF",
  "&:hover": {
    backgroundColor: colors.softPurple,
    color: colors.gray,
  },
  ":disabled": {
    backgroundColor: colors.softPurple2,
    color: "#FFF",
  },
}));

export const Secondary = styled(Button)(({}) => ({
  width: "210px",
  height: "40px",
  padding: "9px 0px 11px 0px",
  borderRadius: "15px",
  fontFamily: "Mulish",
  fontSize: "18px",
  fontWeight: "800",
  lineHeight: "20.08px",
  textAlign: "center",
  textTransform: "capitalize",
  backgroundColor: colors.softPurple,
  color: colors.darkPurple,
  "&:hover": {
    backgroundColor: colors.softPurple2,
    color: colors.darkPurple,
  },
  ":disabled": {
    backgroundColor: colors.gray,
    color: colors.darkPurple,
  },
}));
