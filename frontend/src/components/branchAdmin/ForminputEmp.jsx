import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import EmployeeService from "../../services/EmployeeServices";

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

export default function AddressForm({ selectedEmployee, formMode }) {
  const [branchId, setBranchId] = React.useState([""]);
  const [firstName, setFirstName] = React.useState([""]);
  const [lastName, setLastName] = React.useState([""]);
  const [password, setPassword] = React.useState([""]);
  const [tel, setTel] = React.useState([""]);
  const [role, setRole] = React.useState([""]);
  const [email, setEmail] = React.useState([""]);

  React.useEffect(() => {
    if (selectedEmployee) {
      setBranchId(selectedEmployee.branchId || "");
      setFirstName(selectedEmployee.firstName || "");
      setLastName(selectedEmployee.lastName || "");
      setPassword(selectedEmployee.password || "");
      setTel(selectedEmployee.tel || "");
      setRole(selectedEmployee.role || "");
      setEmail(selectedEmployee.email || "");
    }
  }, [selectedEmployee]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !branchId ||
      !firstName ||
      !lastName ||
      !password ||
      !tel ||
      !email ||
      !role
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
          password: password,
          tel: tel,
          role: role,
          email: email,
        };
        console.log(postData);
        const response = await EmployeeService.Addemployee(postData);
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
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else if (formMode === "Update") {
      try {
        const updatedData = {
          id: selectedEmployee.id,
          firstName: firstName,
          lastName: lastName,
          tel: tel,
          email: email,
        };
        console.log(updatedData);
        const response = await EmployeeService.editEmployee(
          selectedEmployee.id,
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
      <Container component="form" onSubmit={handleSubmit} >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="branchId"
              name="branchId"
              value={branchId}
              type="number"
              onChange={(e) => setBranchId(e.target.value)}
              label="สาขา"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="role"
              name="role"
              value={role}
              type="number"
              onChange={(e) => setRole(e.target.value)}
              label="สิทธิการใช้งาน"
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
                {title.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
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
          {/* <Grid item xs={12} sm={4}>
              <TextField
                id="age"
                name="age"
                label="อายุ"
                fullWidth
                variant="standard"
              />
            </Grid> */}
          <Grid item xs={12} sm={4}>
            <TextField
              id="tel"
              name="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              label="เบอร์โทร"
              type="number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="email"
              type="email"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="รหัสผ่าน"
              type="password"
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
