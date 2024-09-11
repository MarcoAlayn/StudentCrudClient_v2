import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentById,
  showModalDetail,
  setModalMode,
  deleteStudent,
  getAllStudents,
  resetStudentInfo,
} from "../../redux/actions";
import colors from "../../utils/colors";
import ConfirmationModal from "../confirmationModal/ConfirmationModal";
import { StyledMenu } from "./OptionsButtonStyles.js";

export default function OptionsButton({ id }) {
  const { isFetchSuccess } = useSelector((state) => state);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModalRead = () => {
    dispatch(getStudentById(id));
    dispatch(setModalMode("read"));
    dispatch(showModalDetail(true))
    setAnchorEl(null);
  };

  const handleOpenModalEdit = () => {
    dispatch(getStudentById(id));
    dispatch(setModalMode("edit"));
    dispatch(showModalDetail(true))
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   if (isFetchSuccess) {
  //     dispatch(showModalDetail(true));
  //   }
  // }, [isFetchSuccess, dispatch]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteStudent(id));
      dispatch(getAllStudents());
    } catch (error) {
      console.error("Error al eliminar el estudiante:", error);
    }
    setShowConfirmationModal(false);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
    setAnchorEl(null);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <>
      <IconButton sx={{ color: colors.darkPurple }} onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {/* only read */}
        <MenuItem onClick={handleOpenModalRead} disableRipple>
          <VisibilityIcon />
          Ver
        </MenuItem>
        {/* edit */}
        <MenuItem onClick={handleOpenModalEdit} disableRipple>
          <EditIcon />
          Editar
        </MenuItem>
        {/* delete */}
        <MenuItem onClick={handleOpenConfirmationModal} disableRipple>
          <DeleteForeverIcon />
          Eliminar
        </MenuItem>
      </StyledMenu>
      {/* confirmation modal */}
      <ConfirmationModal
        cancelSumbit={handleCloseConfirmationModal}
        confirmSubmit={handleDelete}
        openConfirmationModal={showConfirmationModal}
        textBody={"Estas seguro de eliminar este estudiante"}
        textButton={"Aceptar"}
      />
    </>
  );
}
