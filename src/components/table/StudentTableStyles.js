import { styled, TableCell, TableRow } from "@mui/material";
import colors from "../../utils/colors";

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",
}));

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: colors.darkPurple,
  padding: "0px 16px",
  borderBottom: `5px solid ${colors.gray}`,
  overflow: "hidden",
}));
