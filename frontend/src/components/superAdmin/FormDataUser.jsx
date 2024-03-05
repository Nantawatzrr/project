import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

const role = [
  {
    value: '',
    label: '',
  },
  {
    value: 'superAdmin',
    label: 'Superadmin',
  },
  {
    value: 'branchAdmin',
    label: 'BranchAdmin',
  },
  {
    value: 'branch Staff',
    label: 'Branch Staff',
  },
  {
    value: 'doctor',
    label: 'Doctor',
  },
  {
    value: 'nurse',
    label: 'Nurse',
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
            id="firstName"
            name="firstName"
            label="ชื่อจริง"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="นามสกุล"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="username"
            name="username"
            label="ชื่อผู้ใช้งาน"
            fullWidth
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
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
          {role.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
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
