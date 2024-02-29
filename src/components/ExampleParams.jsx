import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "./utils";

function ExampleParams() {
  const { id, name } = useParams();
  const [departments, setDepartments] = useState({});
  const [departments2, setDepartments2] = useState([]);
  console.log(id, name);

  useEffect(() => {
    fetch(`${BASE_URL}/departments/${id}`)
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/departments`)
      .then((res) => res.json())
      .then((data) => setDepartments2(data));
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {departments.department_name}
          </h1>
          <h2 className="text-1xl tracking-tight text-gray-900 ">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {departments2.map((department) =>
            department.id == id ? (
              <li key={department.id}>
                {department.department_employees.map((department_employee) => (
                  <div
                    key={department_employee.id}
                    className="flex items-center gap-x-6"
                  >
                    <img
                      className="h-16 w-16 rounded-full"
                      src="https://tse4.mm.bing.net/th?id=OIP.mQyY3CKatiLW45eKujJS9QHaHa&pid=Api&P=0&h=220"
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {department_employee.employee.first_name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {department_employee.employee.email}
                      </p>
                    </div>
                  </div>
                ))}
              </li>
            ) : (
              <div></div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default ExampleParams;
