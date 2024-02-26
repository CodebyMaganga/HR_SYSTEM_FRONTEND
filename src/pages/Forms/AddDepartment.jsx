import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../components/utils";

const InputField = ({ name, value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded-md w-full"
      placeholder={placeholder}
    />
  );
};

function AddDepartment() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      DOB: "",
      email: "",
      phone: "",
      gender: "",
      national_ID: "",
      address: "",
      role: "",
      nationality: "",
      emergency_contact: "",
      bankdetails: {
        employee_salary: "",
        employee_account: "",
        employee_bank: "",
        branch_code: "",
      },
      documents: {
        document_type: "",
      },
      references: {
        reference_name: "",
        reference_phone: "",
      },
      dependants: {
        first_name: "",
        last_name: "",
        gender: "",
        age: "",
        relationship: "",
      },
    },
    validationSchema: Yup.object({
      department_name: Yup.string().required("Department name is required"),
      department_employees: Yup.string().required(
        "Department Employees are required"
      ),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/departments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to add department");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("Unable to add departments", error.message);
        toast.error("Failed to add departments: " + error.message);
      }
    },
  });
  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Department Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Department Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="department_name"
              value={formik.values.department_name}
              placeholder="Enter Department Name"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="depart_employees"
              value={formik.values.department_employees}
              placeholder="Enter department Employees"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddDepartment;
