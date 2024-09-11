import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import React from "react";
import Button from "../button/Button";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import colors from "../../utils/colors";

const ConfirmationModal = ({
  openConfirmationModal,
  textBody,
  textButton,
  confirmSubmit,
  cancelSumbit,
}) => {
  return (
    <Dialog
      open={openConfirmationModal}
      PaperProps={{
        sx: {
          borderRadius: "30px",
          overflow: "hidden",
          backgroundColor: colors.gray,
          width: "320px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            padding: "12px 12px 0px 0px",
            position: "absolute",
          }}
        >
          <IconButton
            onClick={cancelSumbit}
            sx={{
              color: colors.blue,
            }}
          >
            <CloseIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
        <Box>
          <DialogContent
            sx={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "600",
              padding: "0px 0px",
              marginTop: "31px",
              padding: "0px 28px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "8px",
              }}
            >
              <ErrorIcon
                sx={{
                  color: colors.lightPurple,
                  fontSize: "55px",
                }}
              />
            </Box>
            {textBody}
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "24px",
            }}
          >
            <Button onClick={confirmSubmit} style={"secondary"}>
              {textButton}
            </Button>
          </DialogActions>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ConfirmationModal;
