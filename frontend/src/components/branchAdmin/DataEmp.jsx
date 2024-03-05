import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ForminputEmp from "./ForminputEmp";
import { useEffect, useState } from "react";
import EmployeeService from "../../services/EmployeeServices";

const DataEmp = () => {
  const rows = [
    {
      id: 1,
      empCode: "65309010001",
      branchId: "บางกอกใหญ่",
      title: "นาย",
      name: "กฤษณชัย",
      surname: "อุบลทิพย์",
      username: "kritsanachai@gmail.com",
      department: "BranchAdmin",
      tel: "09876543321",
    },
    {
      id: 2,
      empCode: "65309010002",
      branchId: "ไทรน้อย",
      title: "นาย",
      name: "นันทวัฒน์",
      surname: "มาศวิเศษ",
      username: "nantawat@gmail.com",
      department: "BranchAdmin",
      tel: "0982079678",
    },
    {
      id: 3,
      empCode: "65309010003",
      branchId: "วงสว่างศ์",
      title: "นาย",
      name: "วิทยา",
      surname: "วิทยา",
      username: "vitaya@gmail.com",
      department: "Branch Staff",
      tel: "09876543321",
    },
    {
      id: 4,
      empCode: "65309010009",
      branchId: "วงสว่างศ์",
      title: "นางสาว",
      name: "สุภาพร",
      surname: "สุภาพร",
      username: "supaporn@gmail.com",
      department: "Branch Staff",
      tel: "09876543321",
    },
    {
      id: 5,
      empCode: "65309010004",
      branchId: "ไทรน้อย",
      title: "นางสาว",
      name: "ศุภรัตน์",
      surname: "ศุภรัตน์",
      username: "suparuk@gmail.com",
      department: "Doctor",
      tel: "09876543321",
    },
    {
      id: 6,
      empCode: "65309010005",
      branchId: "ไทรน้อย",
      title: "นาย",
      name: "สุรชัย",
      surname: "สุรชัย",
      username: "surachai@gmail.com",
      department: "Nurse",
      tel: "09876543321",
    },
    {
      id: 7,
      empCode: "65309010006",
      branchId: "บางกอกใหญ่",
      title: "นาง",
      name: "จารุวรรณ",
      surname: "จารุวรรณ",
      username: "jaruwun@gmail.com",
      department: "Nurse",
      tel: "09876543321",
    },
  ];

  // เพิ่มคอลัมน์เลขลำดับ
  const rowsWithIndex = rows.map((row, index) => ({
    ...row,
    index: index + 1,
  }));

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

  const handleEdit = (id) => {
    const selected = employee.find((emp) => emp.id === id);
    setSelectedEmployee(selected);
    setFormMode("Update");
  };

  const handleDelete = (id) => {
    swal({
      title: "ต้องการลบ?",
      text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("ลบข้อมูลเสร็จสิ้น", {
          icon: "success",
        });
      } else {
        swal("ข้อมูลยังไม่ถูกลบ", {
          icon: "success",
        });
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
          ตารางพนักงาน
        </Typography>
        <DataGrid
         sx={{boxShadow:20 ,  backgroundColor:"white" , color:'black' ,marginBottom:4}}
          rows={employee}
          columns={columns}
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
        <ForminputEmp selectedEmployee={selectedEmployee} formMode={formMode} />
      </Container>
    </Box>
  );
};

export default DataEmp;
