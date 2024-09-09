import React from "react";
import ModalForm from "../../modalForm/ModalForm";
import useForm from "../../../hooks/useForm";
import validateStudentForm from "../../../validations/validateStudentForm";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../../textField/TextField";
import { Box } from "@mui/material";
import { showModalDetail as closeModal } from "../../../redux/actions";

const StudentsForm = () => {
  const dispatch = useDispatch();

  const { studentSelected, modalMode, showModalDetail } = useSelector(
    (state) => state
  );

  const { values, handleChange, handleSubmit, errors } = useForm(
    studentSelected,
    validateStudentForm
  );

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const onClose = () => {
    dispatch(closeModal(false));
  };

  return (
    <ModalForm
      title={`Detalle de estudiante con ID ${studentSelected.studentId}`}
      open={showModalDetail}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        {modalMode === "read" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: "2rem",
            }}
          >
            {/* column 1 */}
            <Box sx={{ ...columnStyle }}>
              <TextField
                type={"read"}
                name={"firstName"}
                label={"Nombre"}
                value={studentSelected.firstName}
              />
              <TextField
                type={"read"}
                name={"middleName"}
                label={"Segundo Nombre"}
                value={studentSelected.middleName}
              />
              <TextField
                type={"read"}
                name={"lastName"}
                label={"Apellido"}
                value={studentSelected.lastName}
              />
              <TextField
                type={"read"}
                name={"gender"}
                label={"Genero"}
                value={studentSelected.gender}
              />
            </Box>
            {/* column 2 */}
            <Box sx={{ ...columnStyle }}>
              <TextField
                type={"read"}
                name={"email"}
                label={"Correo Electrónico"}
                value={studentSelected.email}
              />
              <TextField
                type={"read"}
                name={"emailType"}
                label={"Tipo de Correo Electrónico"}
                value={studentSelected.emailType}
              />
              <TextField
                type={"read"}
                name={"phone"}
                label={"Teléfono"}
                value={studentSelected.phone}
              />
              <TextField
                type={"read"}
                name={"phoneType"}
                label={"Tipo de Teléfono"}
                value={studentSelected.phoneType}
              />
            </Box>
            {/* column 3 */}
            <Box sx={{ ...columnStyle }}>
              <TextField
                type={"read"}
                name={"addressLine"}
                label={"Dirección"}
                value={studentSelected.addressLine}
              />
              <TextField
                type={"read"}
                name={"state"}
                label={"Estado"}
                value={studentSelected.state}
              />
              <TextField
                type={"read"}
                name={"city"}
                label={"Ciudad"}
                value={studentSelected.city}
              />
              <TextField
                type={"read"}
                name={"zipPostcode"}
                label={"Código Postal"}
                value={studentSelected.zipPostcode}
              />
            </Box>
            {/* column 4 */}
            <Box sx={{ ...columnStyle }}>
              <TextField
                type={"read"}
                name={"countryCode"}
                label={"Código de país"}
                value={studentSelected.countryCode}
              />
              <TextField
                type={"read"}
                name={"areaCode"}
                label={"Código de área"}
                value={studentSelected.areaCode}
              />
            </Box>
          </Box>
        )}
        {modalMode === "edit" && (
          <>
            <TextField
              type={"edit"}
              name={"firstName"}
              label={"Nombre"}
              value={values.firstName}
              handleChange={handleChange}
              errors={errors.firstName}
            />
          </>
        )}
        {modalMode === "create" && (
          <>
            <TextField
              type={"create"}
              name={"firstName"}
              label={"Nombre"}
              value={""}
              handleChange={handleChange}
              errors={errors.firstName}
              autoFocus
              required
            />
          </>
        )}
      </form>
    </ModalForm>
  );
};

export default StudentsForm;
