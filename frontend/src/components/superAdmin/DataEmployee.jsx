import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ForminputEmp from "./ForminputEmp";
import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeServices";

// เพิ่มคอลัมน์เลขลำดับ
const DataEmployee = () => {
  const columns = [
    { field: "id", headerName: "#", width: 50 },
    {
      field: "empCode",
      headerName: "รหัสพนักงาน",
      flex: 2,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      field: "firstName",
      headerName: "ชื่อ",
      flex: 2,
      minWidth: 10,
      maxWidth: 200,
    },
    {
      field: "lastName",
      headerName: "นามสกุล",
      flex: 2,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      field: "email",
      headerName: "email",
      flex: 2,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "tel",
      headerName: "เบอร์โทร",
      flex: 2,
      minWidth: 120,
      maxWidth: 220,
    },
    {
      field: "role",
      headerName: "สิทธิการเช้าใช้",
      flex: 2,
      minWidth: 100,
      maxWidth: 200,
    },
    {
      field: "branchId",
      headerName: "สาขา",
      flex: 2,
      minWidth: 70,
      maxWidth: 100,
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
              startIcon={<BorderColorIcon />}
              onClick={() => handleEdit(params.id)}
            >
              แก้ไข
            </Button>
           
          </Stack>
        </div>
      ),
    },
  ];

  const [employee, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formMode, setFormMode] = useState("Add");
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

  // const handleDelete = (id) => {
  //   console.log(id);
  //   swal({
  //     title: "ต้องการลบ?",
  //     text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then(async (willDelete) => {
  //     if (willDelete) {
  //       const response = await EmployeeService.deleteEmployee(id);
  //       if (response.status == 200) {
  //         swal("ลบข้อมูลเสร็จสิ้น", {
  //           icon: "success",
  //         }).then(() => {
  //           window.location.reload();
  //         });
  //       } else {
  //         swal("ข้อมูลยังไม่ถูกลบ", {
  //           icon: "success",
  //         });
  //       }
  //     }
  //   });
  // };

  const handleEdit = (id) => {
    const selected = employee.find((emp) => emp.id === id);
    setSelectedEmployee(selected);
    setFormMode("Update");
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
          ตารางพนักงาน
        </Typography>
        <DataGrid
          // getRowId={getRowid}
          sx={{ backgroundColor:"white" , color:'black' ,boxShadow:10, marginBottom:3}}
          rows={employee}
          columns={columns}
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
        <ForminputEmp  selectedEmployee={selectedEmployee} formMode={formMode} />
      </Container>
    </Box>
  );
};

export default DataEmployee;
