import http from "./http-common";

const GetAllAppoint = () => {
  return http.get("/api/appoint/getAllAppoint");
};

const Addappoint = (addAppoint) =>{
  return http.post("/api/appoint/addAppoint" , addAppoint)
}

const deleteAppoint = (id) => {
  return http.delete(`/api/appoint/${id}`);
}
const AppointmentService = {
  GetAllAppoint,
  Addappoint,
  deleteAppoint
};


export default AppointmentService;
