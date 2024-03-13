import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import Select from "react-select";
import { BASE_URL } from "../../components/utils";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

const DropdownField = ({ label, name, value, onChange, options, required }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded-md w-full"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
        const res = await fetch(`${BASE_URL}/employees`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data = await res.json();
        const employeeOptions = data.map((employee) => ({
          value: employee.id,
          label: `${employee.first_name} ${employee.last_name}`,
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
      "Family/Medical Leave",
    ];

    const leaveTypeOptions = allLeaveTypes.map((type) => ({
      value: type,
      label: type,
    }));
    setLeaveTypes(leaveTypeOptions);

    fetchEmployees();
  }, []);

  const formik = useFormik({
    initialValues: {
      leave_from: "",
      leave_to: "",
      leave_letter: "",
      employee_id: 0,
    },
    validationSchema: Yup.object({
      leave_from: Yup.string().required("The day of leave is required"),
      leave_to: Yup.string().required("The last day of leave is required"),
      leave_letter: Yup.string().required("Leave letter is required"),
      employee_id: Yup.number().required("Employees on leave is required"),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const submissionValues = {
          ...values,
          employee_id: selectedEmployee ? selectedEmployee.value : null,
          leave_type: selectedLeaveType ? selectedLeaveType.value : null,
        };

        //console.log("Submission Values:", submissionValues);

        const res = await fetch(`${BASE_URL}/leaves`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify(submissionValues),
        });
        const data = await res.json();
        //console.log("Response Data:", data);

        if (res.ok) {
          toast.success("Leave added successfully");
          formikBag.resetForm();
        } else {
          toast.error("Failed to add leaves");
        }
      } catch (error) {
        console.error("Unable to add leaves", error.message);
        toast.error("Failed to add leaves " + error.message);
      }
    },
  });

  const handleLeaveTypeChange = (option) => {
    console.log("Selected Leave Type:", option);
    setSelectedLeaveType(option);
    formik.setFieldValue("leave_type", option ? option.value : null);

    if (
      option &&
      (option.value === "Paternity" || option.value === "Maternity")
    ) {
      const leaveFrom = new Date(formik.values.leave_from);
      const leaveTo = new Date(leaveFrom);

      leaveTo.setDate(leaveTo.getDate() + 90);

      formik.setFieldValue("leave_to", leaveTo.toISOString().split("T")[0]);
    } else {
      formik.setFieldValue("leave_to", "");
    }
  };

  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Leave Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block font-bold mb-1" htmlFor="employee">
                Employee
              </label>
              <Select
                id="employee_id"
                value={selectedEmployee}
                required={true}
                onChange={setSelectedEmployee}
                options={employees}
                placeholder="Select Employee"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1" htmlFor="leave_type">
                Leave Type
              </label>
              <Select
                id="leave_type"
                value={selectedLeaveType}
                required={true}
                onChange={handleLeaveTypeChange}
                options={leaveTypes}
                placeholder="Select Type of Leave"
              />
            </div>
            <InputField
              label="Leave From"
              name="leave_from"
              required={true}
              value={formik.values.leave_from}
              onChange={formik.handleChange}
              placeholder="Select Day of leave"
              type="date"
            />
            <InputField
              label="Leave To"
              name="leave_to"
              required={true}
              value={formik.values.leave_to}
              onChange={formik.handleChange}
              placeholder="Select last day of leave"
              type="date"
            />

            <InputField
              label="Leave Letter"
              name="leave_letter"
              required={true}
              value={formik.values.leave_letter}
              onChange={formik.handleChange}
              placeholder="Enter the letter of leave"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-white hover:bg-[#EEAD49] text-black p-[6px] hover: border border-[#EEAD49] px-4 py-2 rounded mr-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddLeave;
