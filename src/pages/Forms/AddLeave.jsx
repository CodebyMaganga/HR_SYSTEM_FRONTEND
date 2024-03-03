import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import Select from "react-select";
import { BASE_URL } from "../../components/utils";

const InputField = ({ label, name, value, onChange, placeholder, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

function AddLeave() {
  const [employees, setEmployees] = useState([]);
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(`${BASE_URL}/employees`);
        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await res.json();
        const employeeOptions = data.map((employee) => ({
          value: employee.id,
          label: `${employee.first_name} ${employee.last_name}`
        }));
        setEmployees(employeeOptions);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const allLeaveTypes = [
      "Annual",
      "Sick",
      "Maternity",
      "Paternity",
      "Bereavement Leave",
      "Family/Medical Leave"
    ];

    const leaveTypeOptions = allLeaveTypes.map((type) => ({ // changed data.map to allLeaveTypes.map
      value: type, // changed type.id to type
      label: type,
    }));
    setLeaveTypes(leaveTypeOptions);
    
    fetchEmployees(); // moved this line inside useEffect

  }, []);

  const formik = useFormik({
    initialValues: {
      leave_from: "",
      leave_to: "",
      leave_letter: "",
    },
    validationSchema: Yup.object({
      leave_from: Yup.string().required("The day of leave is required"),
      leave_to: Yup.string().required("The last day of leave is required"),
      leave_letter: Yup.string().required("Leave letter is required"),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const submissionValues = {
          ...values,
          employee: selectedEmployee ? selectedEmployee.value : null,
          leave_type: selectedLeaveType ? selectedLeaveType.value : null,
        };

        const res = await fetch(`${BASE_URL}/leaves`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionValues),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to add leave");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("Unable to add leaves", error.message);
        toast.error("Failed to add leaves " + error.message);
      }
    },
  });

  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Leave Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block font-bold mb-1" htmlFor="employee">
                Employee
              </label>
              <Select
                id="employees_on_leave"
                value={selectedEmployee}
                onChange={setSelectedEmployee}
                options={employees}
                placeholder="Select Employee"
              />
            </div>
            <InputField
              label="Leave From"
              name="leave_from"
              value={formik.values.leave_from}
              onChange={formik.handleChange}
              placeholder="Select Day of leave"
              type="date"
            />
            <InputField
              label="Leave To"
              name="leave_to"
              value={formik.values.leave_to}
              onChange={formik.handleChange}
              placeholder="Select last day of leave"
              type="date"
            />
            <div className="mb-4">
              <label className="block font-bold mb-1" htmlFor="leave_type">
                Leave Type
              </label>
              <Select
                id="leave_type"
                value={selectedLeaveType}
                onChange={(option) => {
                  setSelectedLeaveType(option);
                  formik.setFieldValue("leave_type", option.value);
                }}
                options={leaveTypes}
                placeholder="Select Type of Leave"
              />
            </div>
            <InputField
              label="Leave Letter"
              name="leave_letter"
              value={formik.values.leave_letter}
              onChange={formik.handleChange}
              placeholder="Enter the letter of leave"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={formik.handleReset}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLeave;
