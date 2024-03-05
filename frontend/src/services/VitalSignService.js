import http from "./http-common";

const AddvitalSign = (patientId , addData) => {
    return http.post(`/api/vitalSign/addVitalSign/${patientId}` , addData)
}

const Getvitalsing = (patientId) => {
    return http.get(`/api/vitalSign/getVitalSign/${patientId}`)
}

const editVital = (vitalSignId , editData) => {
    return http.put(`/api/vitalSign/editVitalSign/${vitalSignId}` , editData)
}

const VitalSignService = {
    AddvitalSign,
    Getvitalsing,
    editVital
}

export default VitalSignService;