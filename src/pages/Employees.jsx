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
        <table className="table-auto">
          <thead>
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
                <td>{employee.profile_picture}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.role}</td>
                <td>{employee.phone}</td>
                <td>{employee.active_status == 1 ? "Active" : "Inactive" }</td>
                <td> icon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );

}



export default Employees