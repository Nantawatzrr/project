import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
import { Button, Container } from "@mui/material";
import VitalSignService from "../../services/VitalSignService";

export default function AddressForm() {
  const [patientId, setPatientId] = React.useState([]);
  const [dateTime, setDateTime] = React.useState([]);
  const [createdBy, setCreatedBy] = React.useState([]);
  const [BP_SYS, setBP_SYS] = React.useState([]);
  const [BP_DIA, setBP_DIA] = React.useState([]);
  const [pulse, setPulse] = React.useState([]);
  const [weight, setWeight] = React.useState([]);
  const [height, setHeight] = React.useState([]);
  const [o2, setO2] = React.useState([]);
  const [glucose, setGlucose] = React.useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !patientId ||
      !dateTime ||
      !createdBy ||
      !BP_SYS ||
      !BP_DIA ||
      !pulse ||
      !weight ||
      !height ||
      !o2 ||
      !glucose
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const postData = {
        patientId:patientId,
        dateTime: dateTime,
        createdBy: createdBy,
        BP_SYS: BP_SYS,
        BP_DIA: BP_DIA,
        pulse: pulse,
        weight: weight,
        height: height,
        o2: o2,
        glucose: glucose,
      };
      console.log(postData)
      const response = await VitalSignService.AddvitalSign(patientId,postData)
      if(response.status == 200){
        swal({
          title: "บันทึกเสร็จสิ้น",
          text: "ขอบคุณ",
          icon: "success",
          timer: 890,
          buttons: false,
        }).then(()=>{
          window.location.reload();
        });
      }
    } catch {
      console.error("Error" , error)
    }
  };
  return (
    <React.Fragment>
      <Container
        sx={{ marginTop: 12 }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom align="center">
          บันทึกค่าต่างๆของผู้ป่วย
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ fontSize: 15 }}>วันที่เข้ารับบริการ</Typography>
            <TextField
              required
              id="dateTime"
              name="dateTime"
              type="date"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="patientId"
              name="patientId"
              label="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="createdBy"
              name="createdBy"
              label="createdBy"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="BP_SYS"
              name="BP_SYS"
              label="BP_SYS"
              value={BP_SYS}
              onChange={(e) => setBP_SYS(e.target.value)}
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
           
              <TextField
                type="BP_DIA"
                id="BP_DIA"
                name="BP_DIA"
                label="BP_DIA"
                value={BP_DIA}
                onChange={(e) => setBP_DIA(e.target.value)}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="pulse"
              name="pulse"
              label="pulse"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}
          {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}

          <Grid item xs={12}>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              ที่อยู่ที่ติดต่อได้
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="weight"
              name="weight"
              label="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="height"
              name="height"
              label="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="o2"
              name="o2"
              label="o2"
              value={o2}
              onChange={(e) => setO2(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="glucose"
              name="glucose"
              label="glucose"
              value={glucose}
              onChange={(e) => setGlucose(e.target.value)}
              type="number"
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
