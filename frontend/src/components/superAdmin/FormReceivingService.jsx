import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Container } from "@mui/material";

const title = [
  {
    value: "",
  },
  {
    value: "นาย",
  },
  {
    value: "นาง",
  },
  {
    value: "นางสาว",
  },
];

const sex = [
  {
    value: "",
    label: "",
  },
  {
    value: "ชาย",
    label: "ชาย",
  },
  {
    value: "หญิง",
    label: "หญิง",
  },
];
const religion = [
  {
    value: "",
    label: "",
  },
];
const treatment = [
  {
    value: "",
  },
  {
    value: "ข้าราชการ รพ",
  },
  {
    value: "ประกันสังคม",
  },
  {
    value: "หลักประกันสุขภาพ",
  },
  {
    value: "ไม่มีสิทธิ",
  },
];

const maritalStatus = [
  {
    value: "",
  },
  {
    value: "โสด",
  },
  {
    value: "คู่",
  },
  {
    value: "หม้าย",
  },
  {
    value: "หย่า",
  },
  {
    value: "แยก",
  },
  {
    value: "สมณะ",
  },
  {
    value: "ไม่ทราบ",
  },
];

const emerging = [
  {
    value: "",
  },
  {
    value: "NR",
  },
  {
    value: "NO CPR",
  },
  {
    value: "ไม่ใส่เครื่องช่วยหายใจ",
  },
  {
    value: "ไม่ส่งต่อ",
  },
  {
    value: "ไม่รักษา",
  },
];

const healthProblems = [
  {
    value: "",
  },
  {
    value: "ความดันโลหิตสูง",
  },
  {
    value: "เบาหวาน",
  },
  {
    value: "หัวใจ",
  },
  {
    value: "โลหิตจาง",
  },
  {
    value: "ไชมันในเลือดสูง",
  },
  {
    value: "เส้นเลือดในสมอง",
  },
  {
    value: "ไต",
  },
  {
    value: "สมองเสื่อม",
  },
  {
    value: "มะเร็ง",
  },
];

const yesNo = [
  {
    value: "",
  },
  {
    value: "ไม่มี",
  },
  {
    value: "มี",
  },
];

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

export default function AddressForm() {
  return (
    <React.Fragment>
      <Container sx={{ marginTop: 12 }}>
        <form action="">
          <Typography variant="h4" gutterBottom align="center">
            บันทึกรักษา
          </Typography>
          <Typography variant="h7" gutterBottom>
            รายละเอียดผู้ป่วย
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <TextField
                id="title"
                select
                label="คำนำหน้า"
                fullWidth
                SelectProps={{
                  native: true,
                }}
                helperText="กรุณาระบุคำนำหน้า"
                variant="standard"
              >
                {title.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="ชื่อจริง"
                fullWidth
                autoComplete="family-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="นามสกุล"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                id="sex"
                select
                label="เพศ"
                fullWidth
                defaultValue="EUR"
                SelectProps={{
                  native: true,
                }}
                helperText="กรุณาระบุเพศ"
                variant="standard"
              >
                {sex.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                id="age"
                name="age"
                label="อายุ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="peopleCard"
                name="peopleCard"
                label="หมายเลขบัตรประชาชน"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                วันเดือนปีเกิด
                <TextField
                  type="Date"
                  id="date"
                  name="city"
                  fullWidth
                  variant="standard"
                />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Autocomplete
                freeSolo
                options={treatment.map((option) => option.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="สิทธิการรักษา"
                    variant="standard"
                    helperText="ถ้าอื่นๆสามารถกรอกได้เลย"
                    id="claim"
                    name="claim"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 16 }} gutterBottom>
                การรักษา
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                วันที่
                <TextField
                  type="Date"
                  id="date"
                  name="dateSave"
                  fullWidth
                  variant="standard"
                />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                id=""
                name=""
                label="ประวัติการเจ็บป่วยในอดีต"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                id=""
                name=""
                label="ประวัติการเจ็บป่วยปัจจุบัน"
                type="text"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="การตรวจร่างกาย/X-ray"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="ผลการตรวจทางห้องปฏิบัติการ"
                fullWidth
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="การวินิจฉัยโรค"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="การรักษาที่ได้รับ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                id=""
                name=""
                label="สรุปผลการวินิจฉัย/การรักษาและสาเหตุที่เสียชีวิต"
                fullWidth
                variant="standard"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={() => handleDelete(params.row.id)}
            sx={{ backgroundColor: "#00CD66", marginBottom: 5, marginTop: 5 }}
          >
            เพิ่ม
            {/* {editId ? "แก้ไข" : "เพิ่ม"} */}
          </Button>
        </form>
      </Container>
    </React.Fragment>
  );
}
