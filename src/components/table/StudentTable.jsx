import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OptionsButton from "../optionsButton/OptionsButton";
import Text from "../text/Text";
import { txtStyles } from "../text/TextStyles";
import { Box, styled } from "@mui/material";
import colors from "../../utils/colors";
import TextField from "../textField/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { setModalMode, showModalDetail } from "../../redux/actions";

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "white",

  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // "&:hover": {
  //   backgroundColor: theme.palette.primary.light,
  // },
}));

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  color: colors.darkPurple,
  padding: "0px 16px",
  borderBottom: `5px solid ${colors.gray}`,
  overflow: "hidden",
}));

const StudentTable = ({ studentList }) => {
  const dispatch = useDispatch();

  const openCreateModal = () => {
    dispatch(showModalDetail(true));
    dispatch(setModalMode("create"));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", border: "none" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "5px",
          backgroundColor: colors.gray,
        }}
      >
        <Text style={txtStyles.titleList} text={"Estudiantes"} />
        <Box sx={{ display: "flex", columnGap: "1rem" }}>
          <TextField Icon={SearchIcon} type={"search"} />
          <Button onClick={openCreateModal} style={"primary"}>
            Añadir Estudiante
          </Button>
        </Box>
      </Box>
      <Table
        sx={{
          minWidth: 650,
          "& .MuiTableRow-root": { marginBottom: "10px" },
          backgroundColor: colors.gray,
        }}
        aria-label='simple table'
      >
        <TableHead sx={{ backgroundColor: colors.gray }}>
          <TableRow>
            <TableCell sx={{ ...txtStyles.secondary }} align='left'>
              ID
            </TableCell>
            <TableCell sx={{ ...txtStyles.secondary }} align='left'>
              Nombre
            </TableCell>
            <TableCell sx={{ ...txtStyles.secondary }} align='left'>
              Teléfono
            </TableCell>
            <TableCell sx={{ ...txtStyles.secondary }} align='left'>
              Correo Electrónico
            </TableCell>
            <TableCell sx={{ ...txtStyles.secondary }} align='left'>
              Fecha de Alta
            </TableCell>
            <TableCell sx={{ ...txtStyles.secondary }} align='left'>
              Opciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList?.map((row) => (
            <CustomTableRow key={row?.studentId}>
              <CustomTableCell sx={{ borderRadius: "15px 0 0 15px" }}>
                {row?.studentId}
              </CustomTableCell>
              <CustomTableCell>
                {row?.firstName} {row?.middleName} {row?.lastName}
              </CustomTableCell>
              <CustomTableCell>{row?.phone}</CustomTableCell>
              <CustomTableCell>{row?.email}</CustomTableCell>
              <CustomTableCell>
                {row?.studentCreatedOn.slice(0, 10)}
              </CustomTableCell>
              <CustomTableCell sx={{ borderRadius: "0 15px 15px 0" }}>
                <OptionsButton id={row?.studentId} />
              </CustomTableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
