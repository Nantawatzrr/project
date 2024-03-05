import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormInputWorkDoctor from './FormInputWorkDoctor'


const rows = [
  {
    id: 1,
    subject: "กฤษณชัย",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    subject: "นันทวัฒน์",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    subject: "วิทยา",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    subject: "สุภาพร",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

// เพิ่มคอลัมน์เลขลำดับ
const rowsWithIndex = rows.map((row, index) => ({ ...row, index: index + 1 }));

const columns = [
  { field: "index", headerName: "#", width: 100 },
  {
    field: "subject",
    headerName: "เรื่อง",
    flex: 2,
    minWidth: 10,
    maxWidth: 200,
  },
  {
    field: "details",
    headerName: "รายละเอียด",
    flex: 1,
    minWidth: 100,
    maxWidth: 600,
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

const handleEdit = (id) => {
  // เขียนโค้ดสำหรับการแก้ไขข้อมูลด้วย ID ที่ได้รับ
  console.log("Edit clicked for row with ID:", id);
};

const handleDelete = (id) => {
  swal({
    title: "ต้องการลบ?",
    text: "ถ้าต้องการลบกด OK  ถ้าไม่ต้องการกด Cancle",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("ลบข้อมูลเสร็จสิ้น", {
        icon: "success",
      });
    } else {
      swal("ข้อมูลยังไม่ถูกลบ",{
        icon: "success",
      });
    }
  });
};

const DataStudents = () => {
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
          บันทึกการทำงาน
        </Typography>
        <DataGrid
          rows={rowsWithIndex}
          columns={columns}
          slots={{ toolbar: GridToolbarQuickFilter }}
        />
        <FormInputWorkDoctor/>
      </Container>
    </Box>
  );
};

export default DataStudents;
