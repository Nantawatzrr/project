import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import PatientsService from "../../services/PatientsService";
import AppointmentService from "../../services/AppointmentService";

// เพิ่มคอลัมน์เลขลำดับ
const Datatableadmin = () => {
  const columns = [
    { field: "id", headerName: "#", width: 50 },
    {
      field: "patientId",
      headerName: "patientId",
      flex: 2,
      minWidth: 50,
      maxWidth: 120,
    },
    {
      field: "description",
      headerName: "description",
      flex: 1,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "appointTo",
      headerName: "appointTo",
      flex: 2,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "appointAt",
      headerName: "appointAt",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "createdBy",
      headerName: "createdBy",
      flex: 2,
      minWidth: 100,
      maxWidth: 130,
    },
    {
      field: "createdAt",
      headerName: "createdAt",
      flex: 2,
      minWidth: 200,
      maxWidth: 200,
    },
    {
      field: "updatedAt",
      headerName: "updatedAt",
      flex: 2,
      minWidth: 200,
      maxWidth: 200,
    },
  ];

  const [patients, setPatients] = useState([]);


  const fetchData = async () => {
    try {
      const response = await AppointmentService.GetAllAppoint();
      setPatients(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 20,
            fontSize: 25,
          }}
        >
          การนัดหมาย
        </Typography>
        <DataGrid
          rows={patients}
          columns={columns}
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
        {/* <Forminput selectedpatients={selectedpatients} formMode={formMode}/> */}
      </Container>
    </Box>
  );
};

export default Datatableadmin;
