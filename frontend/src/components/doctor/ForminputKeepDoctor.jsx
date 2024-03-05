import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import TreatmentService from "../../services/TreatmentService";

export default function ForminputKeepDoctor({ selectedTreatment, formMode }) {
  const [patientId, setpatientID] = React.useState([""]);
  const [treatedDate, setTreatedDate] = React.useState([""]);
  const [description, setDescription] = React.useState([""]);
  const [doctorId, setDoctorId] = React.useState([""]);
  const [treatedAt, setTreatedAt] = React.useState([""]);
  const [createdBy, setCreatedBy] = React.useState([""]);

  React.useEffect(() => {
    if (selectedTreatment) {
      setpatientID(selectedTreatment.patientId || "");
      setTreatedDate(selectedTreatment.treatedDate || "");
      setDescription(selectedTreatment.description || "");
      setDoctorId(selectedTreatment.doctorId || "");
      setTreatedAt(selectedTreatment.treatedAt || "");
      setCreatedBy(selectedTreatment.createdBy || "");
    
    }
  }, [selectedTreatment]);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (
        !patientId ||
        !description ||
        !doctorId ||
        !treatedDate ||
        !treatedAt ||
        !createdBy
      ) {
        setError("Please fill in all required fields.");
        return;
      }
    if (formMode === "Add") {
        try{
            const postData = {
                patientId:patientId,
                description:description,
                doctorId:doctorId,
                treatedDate:treatedDate,
                treatedAt:treatedAt,
                createdBy:createdBy 
            }
            const response = await TreatmentService.AddTreatment(postData)
            if(response.status == 200){
                swal({
                    title: "บันทึกเสร็จสิ้น",
                    text: "ขอบคุณ",
                    icon: "success",
                    timer: 890,
                    buttons: false,
                  }).then(() => {
                    window.location.reload();
                  });
            }
        }catch(error){

        }
    }
  }
  return (
    <React.Fragment>
      <Container component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="patientId"
              name="patientId"
              value={patientId}
              onChange={(e) => setpatientID(e.target.value)}
              label="setpatientID"
              
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="description"
              type="text"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="doctorId"
              name="doctorId"
              type="number"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              label="doctorId"
              fullWidth
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              id="treatedDate"
              name="treatedDate"
              value={treatedDate}
              onChange={(e) => setTreatedDate(e.target.value)}
              label="treatedDate"
              type="date"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="treatedAt"
              name="treatedAt"
              value={treatedAt}
              onChange={(e) => setTreatedAt(e.target.value)}
              label="treatedAt"
              type="number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="createdBy"
              name="createdBy"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              label="createdBy"
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
          {formMode === "Add" ? "เพิ่ม" : "อัพเดท"}
        </Button>
      </Container>
    </React.Fragment>
  );
}
