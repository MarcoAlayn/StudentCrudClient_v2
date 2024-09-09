import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import colors from "../../utils/colors";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Button from "../button/Button";

const ModalForm = ({ open, onClose, title, children }) => {
  return (
    <Dialog
      open={open}
      maxWidth='md'
      PaperProps={{
        sx: {
          borderRadius: "30px",
          overflow: "hidden",
          backgroundColor: colors.gray,
        },
      }}
    >
      <DialogTitle
        sx={{
          color: colors.blue,
          fontWeight: "800",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 40px 20px 50px",
        }}
      >
        {title}
        <IconButton
          onClick={onClose}
          sx={{
            color: colors.darkPurple,
          }}
        >
          <CloseIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: "0px 50px" }}>{children}</DialogContent>
      <DialogActions sx={{ padding: "10px 40px 40px 0px" }}>
        <Button onClick={onClose} style={"primary"} type='submit'>
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalForm;
