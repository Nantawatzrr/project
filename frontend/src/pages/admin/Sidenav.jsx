import { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "../../components/superAdmin/Home";
import DataEmployee from "../../components/superAdmin/DataEmployee";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import logo from "../../icons/logo.png";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import DataTableadmin from "../../components/superAdmin/DataTableadmin";
import DataUser from "../../components/superAdmin/DataUser";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import DataAppointment from "../../components/superAdmin/DataAppointment";
import Swal from "sweetalert2";
import "./bg.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  backgroundColor: "#FFF", // Add this line for background color
  color: "#000000",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#fff", // Add this line for background color
      color: "#000000",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#fff", // Add this line for background color
      color: "#000000",
    },
  }),
}));

export default function MiniDrawer() {
  useEffect(() => {
    const tokenJWT = localStorage.getItem("token");
    if (!tokenJWT) {
      Swal.fire({
        title: "ไม่สามารถใช้งานได้",
        text: "กรุณาเข้าสู่ระบบก่อน",
        width: 600,
        padding: "3em",
        color: "#FF6633",
        icon: "error",
      }).then(() => {
        window.location = "/login";
      });
    }
  });

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <div className="bg">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{ backgroundColor: "white", color: "black", boxShadow: 10 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
              sx={{
                marginRight: 2.5,
                ...(open && { display: "flex" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img src={logo} height={50} width={50} />
            <Typography variant="h6" noWrap component="div" marginLeft={3}>
              Elderlycare Server
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{ boxShadow: 10 }}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <List sx={{ marginTop: 2 }}>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Home")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Datatable")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DataSaverOffOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ผู้ป่วย"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Appointment")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <MoreTimeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ข้อมูลการนัดหมาย"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("Empdata")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Groups2SharpIcon />
                </ListItemIcon>
                <ListItemText
                  primary="พนักงาน"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setMenudata("DataUser")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PersonAddAltIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ผู้ใช้งาน"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={handleLogout}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 5 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menudata == "Home" && <Home />}
          {menudata == "Datatable" && <DataTableadmin />}
          {menudata == "Empdata" && <DataEmployee />}
          {menudata == "DataUser" && <DataUser />}
          {menudata == "Appointment" && <DataAppointment />}
        </Box>
      </Box>
    </div>
  );
}
