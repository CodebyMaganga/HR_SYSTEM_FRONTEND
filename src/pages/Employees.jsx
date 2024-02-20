import { useState, useEffect } from "react";
import { BASE_URL } from "../components/utils";

function Employees() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
      fetch(`${BASE_URL}/employees`)
        .then((res) => res.json())
        .then((data) => setEmployees(data));
    }, []);
    return (
        <>
            <div className="grid items-center m-10">
        <table className="border-spacing-70 border-collapse border border-slate-500 ">
          <thead className="border border-slate-600">
            <tr>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-8">{employee.profile_picture}</td>
                <td className="px-8">{employee.first_name}</td>
                <td className="px-8">{employee.last_name}</td>
                <td className="px-8">{employee.role}</td>
                <td className="px-8">{employee.phone}</td>
                <td className="px-8">
                  {employee.active_status == 1 ? "Active" : "Inactive"}
                </td>
                <td className="px-8"> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </>
    );

}



export default Employees