import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
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
        <Grid item xs={12} sm={3}>
          <TextField
            id="subject"
            name="subject"
            label="เรื่อง"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}sm={9}>
          <TextField
            id="details"
            name="details"
            label="รายละเอียด"
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
