import { DataGrid, GridToolbarQuickFilter  } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormDataUser from './FormDataUser'
import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeServices";


const columns = [
  { field: "id", headerName: "#", width: 100 },
  {
    field: "firstName",
    headerName: "ชื่อ",
    flex: 2,
    minWidth: 150,
    maxWidth: 150,
  },
  {
    field: "lastName",
    headerName: "นามสกุล",
    flex: 2,
    minWidth: 150,
    maxWidth: 150,
  },
  {
    field: "email",
    headerName: "email",
    flex: 2,
    minWidth: 250,
    maxWidth: 250,
  },
  {
    field: "role",
    headerName: "สิทธิการเช้าใช้",
    flex: 2,
    minWidth: 150,
    maxWidth: 150,
  },
  {
    field: "branchId",
    headerName: "สาขา",
    flex: 2,
    minWidth: 150,
    maxWidth: 150,
  },
  {
    field: "actions",
    headerName: "",
    width: 200,
    renderCell: (params) => (
      <div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.id)}
          >
            ลบ
          </Button>
        </Stack>
      </div>
    ),
  },
];

const handleEdit = (id) => {
  // เขียนโค้ดสำหรับการแก้ไขข้อมูลด้วย ID ที่ได้รับ
  console.log("Edit clicked for row with ID:", id);
};

const handleDelete = (id) => {
  console.log(id);
  swal({
    title: "ต้องการปิดการใช้งานบัญชีนี้?",
    text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then(async (willDelete) => {
    if (willDelete) {
      const response = await EmployeeService.deleteEmployee(id);
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

const DataStudents = () => {
  const [employee, setEmployee] = useState([]);
  const fetchData = async () => {
    try {
      const response = await EmployeeService.GetEmployee();
      setEmployee(response.data.data);
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
        <Typography  sx={{
            textAlign: "center",
            marginBottom: 3,
            marginTop: 20,
            fontSize: 25,
          }}>
            ผู้ใช้งาน
        </Typography>
        <DataGrid rows={employee} columns={columns} slots={{ toolbar: GridToolbarQuickFilter }}/>
        {/* <FormDataUser/> */}
      </Container>
    </Box>



  );
};

export default DataStudents;