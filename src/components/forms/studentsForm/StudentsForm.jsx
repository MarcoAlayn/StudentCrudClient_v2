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

  // Verificar si estamos en modo "create" y establecer valores vacíos
  const initialFormValues =
    modalMode === "create"
      ? {
          firstName: "",
          middleName: "",
          lastName: "",
          gender: "",
          email: "",
          emailType: "",
          phone: "",
          phoneType: "",
          addressLine: "",
          state: "",
          city: "",
          zipPostcode: "",
          countryCode: "",
          areaCode: "",
        }
      : studentSelected; // usar el estudiante seleccionado en los otros modos

  const { values, handleChange, handleSubmit, errors } = useForm(
    initialFormValues,
    validateStudentForm
  );

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const titleModal =
    modalMode === "read"
      ? `Información de estudiante con ID ${values?.studentId}`
      : modalMode === "edit"
      ? `Actualización de estudiante con ID ${values?.studentId}`
      : "Nuevo estudiante";

  const onClose = () => {
    dispatch(closeModal(false));
  };

  // const submitByMode =
  //   modalMode === "edit"
  //     ? submit(dispatch())
  //     : modalMode === "create"
  //     ? submit(dispatch())
  //     : () => {};

  return (
    <ModalForm
      title={titleModal}
      open={showModalDetail}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <form>
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
              type={modalMode}
              name={"firstName"}
              label={"Nombre"}
              value={values?.firstName}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"middleName"}
              label={"Segundo Nombre"}
              value={values?.middleName}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"lastName"}
              label={"Apellido"}
              value={values?.lastName}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"gender"}
              label={"Genero"}
              value={values?.gender}
              options={[
                {
                  option: "Masculino",
                  optionValue: "M",
                },
                {
                  option: "Femenino",
                  optionValue: "F",
                },
              ]}
              handleChange={handleChange}
              errors={errors}
            />
          </Box>
          {/* column 2 */}
          <Box sx={{ ...columnStyle }}>
            <TextField
              type={modalMode}
              name={"email"}
              label={"Correo Electrónico"}
              value={values?.email}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"emailType"}
              label={"Tipo de Correo Electrónico"}
              value={values?.emailType}
              handleChange={handleChange}
              options={[
                {
                  option: "Personal",
                  optionValue: "Personal",
                },
                {
                  option: "Escolar",
                  optionValue: "Escolar",
                },
                {
                  option: "Trabajo",
                  optionValue: "Trabajo",
                },
              ]}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"phone"}
              label={"Teléfono"}
              value={values?.phone}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"phoneType"}
              label={"Tipo de Teléfono"}
              value={values?.phoneType}
              handleChange={handleChange}
              options={[
                {
                  option: "Personal",
                  optionValue: "Personal",
                },
                {
                  option: "Trabajo",
                  optionValue: "Trabajo",
                },
                {
                  option: "Casa",
                  optionValue: "Casa",
                },
              ]}
              errors={errors}
            />
          </Box>
          {/* column 3 */}
          <Box sx={{ ...columnStyle }}>
            <TextField
              type={modalMode}
              name={"addressLine"}
              label={"Dirección"}
              value={values?.addressLine}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"state"}
              label={"Estado"}
              value={values?.state}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"city"}
              label={"Ciudad"}
              value={values?.city}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"zipPostcode"}
              label={"Código Postal"}
              value={values?.zipPostcode}
              handleChange={handleChange}
              errors={errors}
            />
          </Box>
          {/* column 4 */}
          <Box sx={{ ...columnStyle }}>
            <TextField
              type={modalMode}
              name={"countryCode"}
              label={"Código de país"}
              value={values?.countryCode}
              handleChange={handleChange}
              errors={errors}
            />
            <TextField
              type={modalMode}
              name={"areaCode"}
              label={"Código de área"}
              value={values?.areaCode}
              handleChange={handleChange}
              errors={errors}
            />
          </Box>
        </Box>
      </form>
    </ModalForm>
  );
};

export default StudentsForm;
