import http from "./http-common";

const GetallTreatment = () => {
  return http.get("/api/treatment/getAllTreatment");
};

const AddTreatment = (addTreatment) =>{
  return http.post("/api/treatment/addTreatment" , addTreatment)
}

const TreatmentService = {
    GetallTreatment,
    AddTreatment,
}

export default TreatmentService
