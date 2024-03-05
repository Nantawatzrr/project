import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Forminput from "./Forminput";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import PatientsService from "../../services/PatientsService";

// เพิ่มคอลัมน์เลขลำดับ
const Datatableadmin = () => {
  const columns = [
    { field: "id", headerName: "#", width: 50 },
    {
      field: "peopleCode",
      headerName: "บัตรประชาชน",
      flex: 2,
      minWidth: 50,
      maxWidth: 120,
    },
    {
      field: "firstName",
      headerName: "ชื่อจริง",
      flex: 1,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "lastName",
      headerName: "นามสกุล",
      flex: 2,
      minWidth: 100,
      maxWidth: 100,
    },
    {
      field: "receivedDate",
      headerName: "วันที่ได้รับ",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "recentIllness",
      headerName: "การเจ็บป่วยล่าสุด",
      flex: 2,
      minWidth: 100,
      maxWidth: 130,
    },
    {
      field: "lastReceived",
      headerName: "รักษาล่าสุด",
      flex: 2,
      minWidth: 70,
      maxWidth: 100,
    },
    {
      field: "consciousness",
      headerName: "สุขภาพจิต",
      flex: 2,
      minWidth: 70,
      maxWidth: 100,
    },
    {
      field: "patientHistory",
      headerName: "ประวัติผู้ป่วย",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    {
      field: "isActive",
      headerName: "สถานะผู้ป่วย",
      flex: 2,
      minWidth: 100,
      maxWidth: 120,
    },
    // {
    //   field: "actions",
    //   headerName: "",
    //   width: 200,
    //   align: "center",
    //   renderCell: (params) => (
    //     <div>
    //       <Stack direction="row" spacing={2}>
    //         <Button
    //           variant="outlined"
    //           onSubmit={{}}
    //           startIcon={<BorderColorIcon />}
    //           onClick={() => handleEdit(params.row.id)}
    //         >
    //           แก้ไข
    //         </Button>
    //         <Button
    //           variant="outlined"
    //           color="error"
    //           startIcon={<DeleteIcon />}
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           ลบ
    //         </Button>
    //       </Stack>
    //     </div>
    //   ),
    // },
  ];

  const [patients, setPatients] = useState([]);
  const [selectedpatients, setSelectedpatients] = useState([null]);
  const [formMode, setFormMode] = useState("Add");

  const fetchData = async () => {
    try {
      const response = await PatientsService.GetAllPatients();
      setPatients(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (id) => {
    const selected = patients.find((patient) => patient.id === id);
    setSelectedpatients(selected);
    setFormMode("Update");
  };

  const handleDelete = (id) => {
    swal({
      title: "ต้องการลบ?",
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
    <div>
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
            ตารางผู้ป่วย
          </Typography>
          <DataGrid
            sx={{ boxShadow: 20, backgroundColor: "white", color: "black" }}
            rows={patients}
            columns={columns}
            slots={{ toolbar: GridToolbarQuickFilter }}
          />
          {/* <Forminput selectedpatients={selectedpatients} formMode={formMode}/> */}
        </Container>
      </Box>
    </div>
  );
};

export default Datatableadmin;
