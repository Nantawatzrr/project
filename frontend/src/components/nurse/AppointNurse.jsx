import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import swal from "sweetalert";
import { useEffect, useState } from "react";

// import PatientsService from "../../services/PatientsService";
import AppointmentService from "../../services/AppointmentService";
import FormAppointDoctor from "./FormAppointDoctor";

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
    {
      field: "actions",
      headerName: "",
      width: 200,
      align: "center",
      renderCell: (params) => (
        <div>
          <Stack direction="row" spacing={2}>
            {/* <Button
              variant="outlined"
              startIcon={<BorderColorIcon />}
              onClick={() => handleEdit(params.row.id)}
            >
              แก้ไข
            </Button> */}
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(params.row.id)}
            >
              ลบ
            </Button>
          </Stack>
        </div>
      ),
    },
  ];

  const [Appoint, setAppoint] = useState([]);
  const [selectedAppoint, setSelectedAppoint] = useState([null]);
  const [formMode, setFormMode] = useState("Add");

  const fetchData = async () => {
    try {
      const response = await AppointmentService.GetAllAppoint();
      setAppoint(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    const selected = Appoint.find((Appoints) => Appoints.id === id);
    setSelectedAppoint(selected);
    setFormMode("Update");
  };
  const handleDelete = (id) => {
    swal({
      title: "ต้องการลบการนัดหมายผู้ป่วย?",
      text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async(willDelete) => {
      if (willDelete) {
        const response = await AppointmentService.deleteAppoint(id)
        if(response.status == 200){
          swal("ลบข้อมูลเสร็จสิ้น", {
            icon: "success",
          }).then(()=>{
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
          การนัดหมาย
        </Typography>
        <DataGrid
          rows={Appoint}
          columns={columns}
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
        <FormAppointDoctor selectedAppoint={selectedAppoint} formMode={formMode}/>
      </Container>
    </Box>
  );
};

export default Datatableadmin;
