import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PatientsService from "../../services/PatientsService";

const currencies = [
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

export default function AddressForm({ selectedpatients, formMode }) {
  const [branchId, setBranchId] = React.useState([""]);
  const [firstName, setFirstName] = React.useState([""]);
  const [lastName, setLastName] = React.useState([""]);
  const [peopleCode, setPeopleCode] = React.useState([""]);
  const [receivedDate, setReceivedDate] = React.useState([""]);
  const [lastReceived, setLastReceived] = React.useState([""]);
  const [recentIllness, setRecentIllness] = React.useState([""]);
  const [consciousness, setConsciousness] = React.useState([""]);
  const [patientHistory, setPatientHistory] = React.useState([""]);

  React.useEffect(() => {
    if (selectedpatients) {
      setBranchId(selectedpatients.branchId || "");
      setFirstName(selectedpatients.firstName || "");
      setLastName(selectedpatients.lastName || "");
      setPeopleCode(selectedpatients.peopleCode || "");
      setReceivedDate(selectedpatients.receivedDate || "");
      setLastReceived(selectedpatients.lastReceived || "");
      setRecentIllness(selectedpatients.recentIllness || "");
      setConsciousness(selectedpatients.consciousness || "");
      setPatientHistory(selectedpatients.patientHistory || "");
    }
  }, [selectedpatients]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (
      !branchId ||
      !firstName ||
      !lastName ||
      !peopleCode ||
      !recentIllness ||
      !consciousness ||
      !patientHistory ||
      !receivedDate ||
      !lastReceived
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    if (formMode === "Add") {
      try {
        const postData = {
          branchId: branchId,
          firstName: firstName,
          lastName: lastName,
          peopleCode: peopleCode,
          recentIllness: recentIllness,
          consciousness: consciousness,
          patientHistory: patientHistory,
          receivedDate: receivedDate,
          lastReceived: lastReceived,
        };
        console.log(postData);
        const response = await PatientsService.AddPatients(branchId, postData);
        if (response.status == 200) {
          swal({
            title: "บันทึกเสร็จสิ้น",
            text: "ขอบคุณ",
            icon: "success",
            timer: 890,
            buttons: false,
          }).then(() => {
            window.location.reload();
          });
        } else if (response.status == 401) {
          swal({
            title: "ไม่มีสิทธิ์",
            text: "ขอบคุณ",
            icon: "success",
            timer: 890,
            buttons: false,
          });
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else if (formMode === "Update") {
      try {
        const updatedData = {
          id: selectedpatients.id,
          firstName: firstName,
          lastName: lastName,
          peopleCode: peopleCode,
          recentIllness: recentIllness,
          consciousness: consciousness,
          patientHistory: patientHistory,
          receivedDate: receivedDate,
          lastReceived: lastReceived,
        };
        console.log(updatedData);
        const response = await PatientsService.editPatients(
          selectedpatients.id,
          updatedData
        );
        if (response.status == 200) {
          swal({
            title: "อัพเดทเสร็จสิ้น",
            text: "ขอบคุณ",
            icon: "success",
            timer: 890,
            buttons: false,
          }).then(() => {
            window.location.reload();
          });
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  return (
    <React.Fragment>
      <Container component="form" onSubmit={handlesubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="branchId"
              name="branchId"
              label="branchId"
              type="number"
              value={branchId}
              onChange={(e) => setBranchId(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
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
        </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="peopleCode"
              name="peopleCode"
              type="number"
              value={peopleCode}
              onChange={(e) => setPeopleCode(e.target.value)}
              label="peopleCode"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="ชื่อจริง"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="นามสกุล"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: 15 }}>วันที่รับ</Typography>
            <TextField
              id="receivedDate"
              name="receivedDate"
              type="date"
              value={receivedDate}
              onChange={(e) => setReceivedDate(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="recentIllness"
              name="recentIllness"
              value={recentIllness}
              onChange={(e) => setRecentIllness(e.target.value)}
              label="recentIllness"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="consciousness"
              name="consciousness"
              value={consciousness}
              onChange={(e) => setConsciousness(e.target.value)}
              label="consciousness"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ fontSize: 15 }}>รักษาล่าสุด</Typography>
            <TextField
              id="lastReceived"
              name="lastReceived"
              type="date"
              value={lastReceived}
              onChange={(e) => setLastReceived(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="patientHistory"
              name="patientHistory"
              value={patientHistory}
              onChange={(e) => setPatientHistory(e.target.value)}
              label="patientHistory"
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
