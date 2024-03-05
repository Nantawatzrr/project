import {  Box, Grid } from "@mui/material";
import Chart from "./Chart";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";

const DashboardCard = () => {
  const userData = [
    { title: "จำนวนผู้ใช้งาน", value: 200, icon: <AccountCircleOutlinedIcon /> },
    { title: "จำนวนผู้ป่วย..."  , value: 200  , icon: <DataSaverOffOutlinedIcon/>},
    { title: "จำนวนพนักงาน", value: 200 , icon: <Groups2SharpIcon/>},

    // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
  ];
  return (
    <Box sx={{ display: "flex" , marginTop:18 }}>
      <Grid container >
        <Grid item xs={12}>
          <Chart />
        </Grid>
      </Grid>
    </Box>
  );
};

const cardStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 2,
  margin: 1,
  height: 100,
  // width:200
};

export default DashboardCard;
