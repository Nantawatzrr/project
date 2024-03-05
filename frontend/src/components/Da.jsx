import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ExportDefaultToolbar() {
    const [employee, Setemployee] = useState([]);
    useEffect(() => {
      GetEmployee()
    }, [])
    
    const GetEmployee = () => {
      fetch("http://localhost:4000/api/employee/getAllEmployee")
        .then(res => res.json())
        .then(
          (result) => {
            Setemployee(result)
          }
        )
    }
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>dasdasdas</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employee.map((employees) => (
                    <TableCell>{employees.empCode}</TableCell>
                ))}
                
            </TableBody>
        </Table>
    </div>
  )
}
