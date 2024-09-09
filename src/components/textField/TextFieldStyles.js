import { styled, Input, InputLabel } from "@mui/material";
import colors from "../../utils/colors";

export const IntputSearch = styled(Input)(({}) => ({
  backgroundColor: "white",
  borderRadius: "15px",
  border: "none",
  color: colors.darkPurple,
  paddingLeft: "10px",
  width: "400px",
  height: "40px",
}));

export const ReadLabel = styled(InputLabel)(({}) => ({
  color: colors.gray2,
  fontWeight: "bolder",
}));

export const EditLabel = styled(InputLabel)(({}) => ({
  color: colors.darkPurple,
  fontWeight: "bold",
}));

export const EditInput = styled(Input)(({}) => ({
  backgroundColor: "white",
  borderRadius: "15px",
  padding: "10px",
}));

export const CreateLabel = styled(InputLabel)(({}) => ({
  color: colors.darkPurple,
  fontWeight: "bold",
}));

export const CreateInput = styled(Input)(({}) => ({
  backgroundColor: "white",
  borderRadius: "15px",
  padding: "10px",
}));
