import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/actions";
import Loader from "../components/Loader/Loader";
import AlertFeedback from "../components/alertFeedback/AlertFeedback";
import Text from "../components/text/Text";
import { Box } from "@mui/material";
import ModalForm from "../components/modalForm/ModalForm";
import StudentTable from "../components/table/StudentTable";

const Students = () => {
  const dispatch = useDispatch();
  const {
    fetchInProcess,
    // studentList,
    showModalDetail,
  } = useSelector((state) => state);

  const studentList = [
    {
      studentId: 1,
      firstName: "Jose",
      middleName: "Ángel",
      lastName: "Martínez",
      email: "miguel.martinez@example.com",
      phone: "8123456789",
      studentCreatedOn: "2024-09-06T07:41:19.4233333",
    },
    {
      studentId: 2,
      firstName: "Luis",
      middleName: "Enrique",
      lastName: "Pérez",
      email: "luis.perez@example.com",
      phone: "8112345678",
      studentCreatedOn: "2024-09-06T07:41:19.45",
    },
    {
      studentId: 3,
      firstName: "María",
      middleName: "Guadalupe",
      lastName: "López",
      email: "maria.lopez@example.com",
      phone: "8123456780",
      studentCreatedOn: "2024-09-06T07:41:19.4533333",
    },
    {
      studentId: 4,
      firstName: "José",
      middleName: "Manuel",
      lastName: "Hernández",
      email: "jose.hernandez@example.com",
      phone: "8187654321",
      studentCreatedOn: "2024-09-06T07:41:19.4566667",
    },
    {
      studentId: 5,
      firstName: "Juan",
      middleName: "Carlos",
      lastName: "García",
      email: "juan.garcia@example.com",
      phone: "8115678901",
      studentCreatedOn: "2024-09-06T07:41:19.46",
    },
    {
      studentId: 6,
      firstName: "Raúl",
      middleName: "Alejandro",
      lastName: "Rodríguez",
      email: "raul.rodriguez@example.com",
      phone: "8181234567",
      studentCreatedOn: "2024-09-06T07:41:19.4633333",
    },
    {
      studentId: 7,
      firstName: "Elena",
      middleName: "Sofía",
      lastName: "Ramírez",
      email: "elena.ramirez@example.com",
      phone: "8187654320",
      studentCreatedOn: "2024-09-06T07:41:19.4666667",
    },
    {
      studentId: 8,
      firstName: "Patricia",
      middleName: "Lorena",
      lastName: "Gómez",
      email: "patricia.gomez@example.com",
      phone: "8129876543",
      studentCreatedOn: "2024-09-06T07:41:19.47",
    },
    {
      studentId: 9,
      firstName: "Carlos",
      middleName: "Eduardo",
      lastName: "Ruiz",
      email: "carlos.ruiz@example.com",
      phone: "6623456789",
      studentCreatedOn: "2024-09-06T07:41:19.47",
    },
    {
      studentId: 10,
      firstName: "Ana",
      middleName: "Carolina",
      lastName: "Vázquez",
      email: "ana.vazquez@example.com",
      phone: "6441234567",
      studentCreatedOn: "2024-09-06T07:41:19.4733333",
    },
    {
      studentId: 11,
      firstName: "Roberto",
      middleName: "Antonio",
      lastName: "Santos",
      email: "roberto.santos@example.com",
      phone: "6312345678",
      studentCreatedOn: "2024-09-06T07:41:19.4766667",
    },
    {
      studentId: 12,
      firstName: "Laura",
      middleName: "Beatriz",
      lastName: "Ortega",
      email: "laura.ortega@example.com",
      phone: "6223456789",
      studentCreatedOn: "2024-09-06T07:41:19.48",
    },
    {
      studentId: 13,
      firstName: "Fernando",
      middleName: "Andrés",
      lastName: "Méndez",
      email: "fernando.mendez@example.com",
      phone: "6423456780",
      studentCreatedOn: "2024-09-06T07:41:19.4833333",
    },
    {
      studentId: 14,
      firstName: "Paola",
      middleName: "María",
      lastName: "Cruz",
      email: "paola.cruz@example.com",
      phone: "6445678901",
      studentCreatedOn: "2024-09-06T07:41:19.4866667",
    },
    {
      studentId: 15,
      firstName: "Raúl",
      middleName: "Jesús",
      lastName: "Luna",
      email: "raul.luna@example.com",
      phone: "6625678901",
      studentCreatedOn: "2024-09-06T07:41:19.49",
    },
  ];

  // useEffect(() => {
  //   try {
  //     dispatch(getAllStudents());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [dispatch]);

  return (
    <Layout>
      {/* loader */}
      <Loader />
      {/* alert */}
      {!fetchInProcess && <AlertFeedback />}
      {/* modalForm */}
      {!fetchInProcess && showModalDetail && <ModalForm />}
      {/* Tabla */}
      {!fetchInProcess && studentList?.length > 0 ? (
        <StudentTable studentList={studentList} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text textTemplate={"moduleTitle"}>
            No hay estudiantes para mostrar.
          </Text>
        </Box>
      )}
    </Layout>
  );
};

export default Students;
