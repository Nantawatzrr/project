import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.jsx";
import Sidenav from "./pages/admin/Sidenav.jsx";
import BranchAdminpage from "./pages/branchAdmin/branchAdminpage.jsx";
import BranchStaff from "./pages/branchStaff/BranchStaffpage.jsx";
import Doctorpage from "./pages/doctor/Doctorpage.jsx";
import Nursepage from "./pages/nurse/Nursepage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/superAdmin" element={<Sidenav />} />
      <Route path="/branchAdmin" element={<BranchAdminpage />} />
      <Route path="/branchStaff" element={<BranchStaff />} />
      <Route path="/doctorpage" element={<Doctorpage />} />
      <Route path="/nursepage" element={<Nursepage />} />
    </Routes>
  </BrowserRouter>
);
