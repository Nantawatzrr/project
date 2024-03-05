import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';


const currencies = [
  {
    value: '',
    label: '',
  },
  {
    value: 'นาย',
    label: 'นาย',
  },
  {
    value: 'นาง',
    label: 'นาง',
  },
  {
    value: 'นางสาว',
    label: 'นางสาว',
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
      <Container component="form" onSubmit={handleDelete}>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="patientCode"
            name="patientCode"
            label="รหัสผู้ป่วย"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="peopleCard"
            name="peopleCard"
            label="หมายเลขบัตรประชาชน"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          id="title"
          select
          label="คำนำหน้า"
          fullWidth
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="กรุณาเลือกคำนำหน้า"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="firstName"
            name="firstName"
            label="ชื่อจริง"
            fullWidth
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
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
            required
            id="weight"
            name="weight"
            label="น้ำหนัก"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="height"
            name="height"
            label="ส่วนสูง"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="qtySbp"
            name="qtySbp"
            label="SBP"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="qtyDpb"
            name="qtyDpb"
            label="DPB"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="pulse"
            name="pulse"
            label="Pulse"
            fullWidth
            variant="standard"
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
