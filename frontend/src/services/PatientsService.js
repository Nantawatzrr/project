import http from './http-common'

const GetAllPatients = () => {
    return http.get('/api/patient/getAllPatient');
}

const AddPatients = (branchId,addPatients) => {
    return http.post(`/api/patient/addPatient/${branchId}` , addPatients)
    // return http.post('/api/patient/addPatient/{branchId}' , addPatients)
}

const editPatients = (id , editData) => {
    return http.put(`/api/patient/editPatient/${id}` , editData)
}

const deletePatients = (id) => {
    return http.delete(`/api/patient/${id}`)
}

const PatientsService = {
    GetAllPatients,
    AddPatients,
    editPatients,
    deletePatients
    
}

export default PatientsService