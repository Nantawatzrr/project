import http from './http-common'

const GetEmployee = () => {

    return http.get("/api/employee/getAllEmployee");
};

const Addemployee = (addEmployee) => {
    return http.post("/api/employee/addEmployee" , addEmployee)
}

const deleteEmployee = (id) => {
    return http.delete(`/api/employee/${id}`);
    
}

const editEmployee = (id , editData) =>{
    return http.put(`/api/employee/editEmployee/${id}` , editData)
}


const EmployeeService = {
    GetEmployee,
    Addemployee,
    deleteEmployee,
    editEmployee
}

export default EmployeeService