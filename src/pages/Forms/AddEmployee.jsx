import React from "react";
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

const AddEmployee = () => {
  // Formik useFormik hook
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
      bank_details: {
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
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      dateOfBirth: Yup.string().required("D.O.B is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      gender: Yup.string().required("Gender is required"),
      nationalId: Yup.string().required("National ID is required"),
      address: Yup.string().required("Address is required"),
      role: Yup.string().required("Role is required"),
      nationality: Yup.string().required("Nationality is required"),
      emergencyContact: Yup.string().required("Emergency contact is required"),
      bankDetails: Yup.object().shape({
        employeeSalary: Yup.string().required("Employee salary required"),
        employeeAccount: Yup.string().required("Employee Account required"),
        employeeBank: Yup.string().required("Employee Bank required"),
        branchCode: Yup.string().required("Branch code required"),
      }),
      documents: Yup.object().shape({
        documentType: Yup.string().required("Document type required"),
      }),
      references:Yup.object().shape({
        referenceName: Yup.string().required("Reference name required"),
        referencePhone: Yup.string().required("Reference phone required"),
      }),
      dependants: Yup.object().shape({
        firstName: Yup.string().required("Dependants first name is required"),
        lastName: Yup.string().required("Dependants last name is required"),
        gender: Yup.string().required("Dependants gender is required"),
        age: Yup.number().required("Dependants age is required"),
        relationship: Yup.string().required("Dependants relationship is required"),
      }),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Submitting form", values);
      try {
        const res = await fetch(`${BASE_URL}/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          throw new Error("Failed to add employee");
        }

        if (data.statusCode == !200) {
          toast.error(data.message);
        } else if (data.status == "success") {
          toast.success(data.message);
          // if login is successful, resetform
          resetForm();
          //persisting the user once logged in
          // redirecting the user to contacts page
        }
      } catch (error) {
        console.log("Unable to add employee", error.message);
        toast.error("Failed to add employee: " + error.message);
      }
    },
  });

  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/* Personal Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="first_name"
              value={formik.values.first_name}
              placeholder="First Name"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="last_name"
              value={formik.values.last_name}
              placeholder="Last Name"
              onChange={formik.handleChange}
            />

            <InputField
              type="date"
              name="DOB"
              value={formik.values.DOB}
              placeholder="D.O.B"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="email"
              value={formik.values.email}
              placeholder="Email"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="phone"
              value={formik.values.phone}
              placeholder="Phone Number"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="gender"
              value={formik.values.gender}
              placeholder="Gender"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="national_ID"
              value={formik.values.national_ID}
              placeholder="National ID"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="address"
              value={formik.values.address}
              placeholder="Address"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="role"
              value={formik.values.role}
              placeholder="Role"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="nationality"
              value={formik.values.nationality}
              placeholder="Nationality"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="emergency_contact"
              value={formik.values.emergency_contact}
              placeholder="Emergency Contact"
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Bank Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="bank_details.employee_salary"
              value={formik.values.bank_details.employee_salary}
              placeholder="Employee Salary"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="bank_details.employee_account"
              value={formik.values.bank_details.employee_account}
              placeholder="Employee Account"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="bank_details.employee_bank"
              value={formik.values.bank_details.employee_bank}
              placeholder="Employee Bank"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="bank_details.branch_code"
              value={formik.values.bank_details.branch_code}
              placeholder="Branch Code"
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Document Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Document Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="documents.document_type"
              value={formik.values.documents.document_type}
              placeholder="Document Type"
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Reference Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Reference Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="references.reference_name"
              value={formik.values.references.reference_name}
              placeholder="Reference Name"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="references.reference_phone"
              value={formik.values.references.reference_phone}
              placeholder="Reference Phone"
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Dependants Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Dependants Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="dependants.first_name"
              value={formik.values.dependants.first_name}
              placeholder="Dependants First name"
              onChange={formik.handleChange}
            />

<InputField
              type="text"
              name="dependants.last_name"
              value={formik.values.dependants.last_name}
              placeholder="Dependants last name"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="dependants.gender"
              value={formik.values.dependants.gender}
              placeholder="Dependants gender"
              onChange={formik.handleChange}
            />

<InputField
              type="number"
              name="dependants.age"
              value={formik.values.dependants.age}
              placeholder="Dependants age"
              onChange={formik.handleChange}
            />

<InputField
              type="text"
              name="dependants.relationship"
              value={formik.values.dependants.relationship}
              placeholder="Dependants relationship"
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
};

export default AddEmployee;
