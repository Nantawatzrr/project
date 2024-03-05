import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EmployeeService from "../../services/EmployeeServices";
import PatientsService from "../../services/PatientsService";
import AppointmentService from "../../services/AppointmentService";
import swal from "sweetalert";
const title = [
  {
    value: "",
    label: "",
  },
  {
    value: "นาย",
    label: "นาย",
  },
  {
    value: "นาง",
    label: "นาง",
  },
  {
    value: "นางสาว",
    label: "นางสาว",
  },
];

export default function FormAppointDoctor({ selectedAppoint, formMode }) {
  const [patientId, setpatientID] = React.useState([""]);
  const [description, setDescription] = React.useState([""]);
  const [doctorId, setDoctorId] = React.useState([""]);
  const [branchId, setBranchId] = React.useState([""]);
  const [createId, setCreateId] = React.useState([""]);

  React.useEffect(() => {
    if (selectedAppoint) {
      setpatientID(selectedAppoint.patientId || "");
      setDescription(selectedAppoint.description || "");
      setDoctorId(selectedAppoint.doctorId || "");
      setBranchId(selectedAppoint.branchId || "");
      setCreateId(selectedAppoint.createId || "");
    }
  }, [selectedAppoint]);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (
        !branchId ||
        !patientId ||
        !description ||
        !doctorId ||
        !createId 
      ) {
        setError("Please fill in all required fields.");
        return;
      }
    if (formMode === "Add") {
        try{
            const postData = {
                branchId:branchId,
                patientId:patientId,
                description:description,
                doctorId:doctorId,
                createId:createId
            }
            const response = await AppointmentService.Addappoint(postData)
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
              id="branchId"
              name="branchId"
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              label="branchId"
              type="number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="createId"
              name="createId"
              value={createId}
              onChange={(e) => setCreateId(e.target.value)}
              label="createId"
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
