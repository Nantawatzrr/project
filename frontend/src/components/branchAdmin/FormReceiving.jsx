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
const religion = [
  {
    value: "",
    label: "",
  },
  {
    value: "พุทธ",
    label: "พุทธ",
  },
  {
    value: "คริสต์",
    label: "คริสต์",
  },
  {
    value: "อิสลาม",
    label: "อิสลาม",
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
            ลงทะเบียนผู้รับบริการ
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
            <Grid item xs={12} sm={6}>
              <TextField
                id="peopleCard"
                name="peopleCard"
                label="หมายเลขบัตรประชาชน"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                id="nationality"
                name="nationality"
                label="สัญชาติ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="religion"
                select
                label="ศาสนา"
                fullWidth
                SelectProps={{
                  native: true,
                }}
                helperText="กรุณาระบุศาสนา"
                variant="standard"
              >
                {religion.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="maritalStatus"
                select
                label="สถานภาพสมรส"
                fullWidth
                helperText="กรุณาระบุสถานภาพสมรส"
                SelectProps={{
                  native: true,
                }}
                variant="standard"
              >
                {maritalStatus.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
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
                ที่อยู่ที่ติดต่อได้
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="houseNumber"
                name="houseNumber"
                label="บ้านเลขที่"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="group"
                name="group"
                label="หมู่"
                type="number"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="์nameVillage"
                name="nameVillage"
                label="หมู่บ้าน"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="alley"
                name="alley"
                label="ซอย"
                type="number"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="road"
                name="road"
                label="ถนน"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="district"
                name="district"
                label="แขวง/ตำบล"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="zone"
                name="zone"
                label="เขต/อำเภอ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="province"
                name="province"
                label="จังหวัด"
                fullWidth
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                id="telHome"
                name="telHome"
                label="โทรศัพท์บ้าน"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="tel"
                name="tel"
                label="โทรศัพท์มือถือ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 16 }} gutterBottom>
                บุคคลที่สามารถติดต่อได้ กรณีฉีกเฉิน
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="firstName1"
                name="firstName1"
                label="ขื่อ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="lastName1"
                name="lastName1"
                label="นามสกุล"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="relationship1"
                name="relationship1"
                label="ความสัมพันธ์"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="tel1"
                name="tel1"
                label="เบอร์โทร"
                type="number"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="firstName2"
                name="firstName2"
                label="ขื่อ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="lastName2"
                name="lastName2"
                label="นามสกุล"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="relationship2"
                name="relationship2"
                label="ความสัมพันธ์"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="tel2"
                name="tel2"
                label="เบอร์โทร"
                type="number"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="firstName3"
                name="firstName3"
                label="ขื่อ"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="lastName3"
                name="lastName3"
                label="นามสกุล"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="relationship3"
                name="relationship3"
                label="ความสัมพันธ์"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="tel3"
                name="tel3"
                label="เบอร์โทร"
                type="number"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="caseOfEmergency"
                name="caseOfEmergency"
                label="กรณีฉีกเฉินให้ส่งไปรักษาที่"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                freeSolo
                options={emerging.map((option) => option.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=".."
                    variant="standard"
                    helperText="ถ้าอื่นๆสามารถกรอกได้เลย"
                    id="claim"
                    name="claim"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                freeSolo
                options={healthProblems.map((option) => option.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="โรคประจำตัว/ปัญหาสุขภาพ"
                    variant="standard"
                    helperText="ถ้าอื่นๆสามารถกรอกได้เลย"
                    id="healthProblems"
                    name="healthProblems"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                freeSolo
                options={yesNo.map((option) => option.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="ประวัติการแพ้ยา/แพ้อาหาร"
                    variant="standard"
                    helperText="ถ้ามีสามารถกรอกต่อได้เลย"
                    id="healthProblems"
                    name="healthProblems"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ backgroundColor: "#00CD66", marginBottom: 5  , marginTop:5}}
        >
          เพิ่ม
          {/* {editId ? "แก้ไข" : "เพิ่ม"} */}
        </Button>
      </Container>
    </React.Fragment>
  );
}
