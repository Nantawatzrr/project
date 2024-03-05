import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import ForminputPatientDoctor from "./ForminputPatientDoctor";
import ForminputPatient from "../../components/nurse/ForminputPatient";
import { useEffect, useState } from "react";
import PatientsService from "../../services/PatientsService";
import FormReceiving from "./FormReceiving";
import VitalSignService from "../../services/VitalSignService";
const DatapatientDoctor = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
      field: "dateTime",
      headerName: "dateTime",
      flex: 1,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "createdBy",
      headerName: "createdBy",
      flex: 2,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "BP_SYS",
      headerName: "BP_SYS",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "BP_DIA",
      headerName: "BP_DIA",
      flex: 2,
      minWidth: 100,
      maxWidth: 130,
    },
    {
      field: "pulse",
      headerName: "pulse",
      flex: 2,
      minWidth: 70,
      maxWidth: 100,
    },
    {
      field: "weight",
      headerName: "weight",
      flex: 2,
      minWidth: 70,
      maxWidth: 100,
    },
    {
      field: "height",
      headerName: "height",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "o2",
      headerName: "o2",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "glucose",
      headerName: "glucose",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "actions",
      headerName: "",
      width: 200,
      align: "center",
      renderCell: (params) => (
        <div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<BorderColorIcon />}
              onClick={() => handleEdit(params.row.id)}
            >
              แก้ไข
            </Button>
            {/* <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(params.row.id)}
            >
              ลบ
            </Button> */}
          </Stack>
        </div>
      ),
    },
  ];

  const [vitalSing, setVitalSing] = useState([]);
  const [selectedvitalSing, setSelectedvitalSing] = useState([null]);
  const [formMode, setFormMode] = useState("Add");
  const handleSearch = async () => {
    try {
      const result = await VitalSignService.Getvitalsing(searchTerm);
      console.log("API Response:", result);
  
      const newData = result.data.data;
      
      if (Array.isArray(newData) || typeof newData === 'object') {
        // If it's an array or an object, convert it to an array
        const dataArray = Array.isArray(newData) ? newData : [newData];
        setVitalSing(dataArray);
      } else {
        console.error("Invalid data structure returned from the API:", newData);
        setVitalSing([]); // Set to an empty array or handle this case differently
      }
    } catch (error) {
      console.error("Error fetching or processing data:", error);
      swal({
        title: "ไม่พบข้อมูล",
        text: "ขอบคุณ",
        icon: "error",
        timer: 890,
        buttons: false,
      })
      setVitalSing([]); // Set to an empty array or handle this case differently
    }
  };
useEffect(() => {
    handleSearch(); // Initial data fetch
  }, []);

  const handleEdit = (id) => {
    const selected = vitalSing.find((vt) => vt.id === id);
    setSelectedvitalSing(selected);
    setFormMode("Update");
  };

  const handleDelete = (id) => {
    swal({
      title: "ต้องการลบสถานะผู้ป่วย?",
      text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const response = await PatientsService.deletePatients(id);
        if (response.status == 200) {
          swal("ลบข้อมูลเสร็จสิ้น", {
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        } else {
          swal("ข้อมูลยังไม่ถูกลบ", {
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <Box>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 10,
            fontSize: 25,
          }}
        >
          ลงข้อมูลสัญญาณชีพ
        </Typography>
        <TextField
          label="ค้นหาตาม patientId"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginLeft: 2 }}
        >
          ค้นหา
        </Button>
        <DataGrid rows={vitalSing} columns={columns} />
        <FormReceiving selectedvitalSing={selectedvitalSing} formMode={formMode} />
      </Container>
    </Box>
  );
};

export default DatapatientDoctor;
