import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
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

const handleDelete = (id) => {
  event.preventDefault();
  swal({
    title: "บันทึกเสร็จสิ้น",
    text: "ขอบคุณ",
    icon: "success",
    timer: 890,
    buttons: false,
  });
};

export default function AddressForm() {
  return (
    <React.Fragment>
    <Container sx={{ marginTop: 12 }} component="form" onSubmit={handleDelete}>
          <Typography variant="h4" gutterBottom align="center">
            บันทึกส่งต่อบริการ
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
                การส่งตัว
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontSize: 12 }} gutterBottom>
                วันที่ส่ง
                <TextField
                  type="Date"
                  id="date"
                  name="city"
                  fullWidth
                  variant="standard"
                />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
            <Typography sx={{ fontSize: 12 }} gutterBottom>
                เวลา
                <TextField
                  type="Time"
                  id="time"
                  name="time"
                  fullWidth
                  variant="standard"
                />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="ส่งตัวไปที่"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id=""
                name=""
                label="เหตุผลการส่งตัว"
                type="text"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="การวินิจฉัยโรคขั้นต้น"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="การวินิจฉัยหลัก"
                fullWidth
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="เเพทย์ผู้ส่ง"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="จุดส่งต่อ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="จุดรับปลายทาง"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="ห้องตรวจ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="สภาพผู้ป่วย"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id=""
                name=""
                label="สาเหตุ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id=""
                name=""
                label="เลขทะเบียนรถ"
                fullWidth
                variant="standard"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ backgroundColor: "#00CD66", marginBottom: 5, marginTop: 5 }}
          >
            เพิ่ม
            {/* {editId ? "แก้ไข" : "เพิ่ม"} */}
          </Button>
    </Container>
  </React.Fragment>
  );
}
