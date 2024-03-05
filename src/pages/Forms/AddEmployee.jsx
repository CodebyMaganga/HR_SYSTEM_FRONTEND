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
      profile_picture: "",
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
      active_status: "",
      marital_status: "",
      date_joined: "",
      emergency_contacts: {
        first_name: "",
        last_name: "",
        gender: "",
        relationship: "",
        phone: "",
      },
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
      profile_picture: Yup.string().required("Profile picture is required"),
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      DOB: Yup.date().required("D.O.B is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      gender: Yup.string().required("Gender is required"),
      national_ID: Yup.string().required("National ID is required"),
      address: Yup.string().required("Address is required"),
      role: Yup.string().required("Role is required"),
      nationality: Yup.string().required("Nationality is required"),
      emergency_contact: Yup.string().required("Emergency contact is required"),
      active_status: Yup.string().required("Active status is required"),
      marital_status: Yup.string().required("Marital status is required"),
      date_joined: Yup.date().required("Date joined is required"),
      emergency_contacts: Yup.object({
        first_name: Yup.string().required("Emergency first name is required"),
        last_name: Yup.string().required("Emergency's last name is required"),
        gender: Yup.string().required("Emergency's gender is required"),
        phone: Yup.string().required("Emergency's phone number is required"),
        relationship: Yup.string().required(
          "Emergency's relationship is required"
        ),
      }),
      bankdetails: Yup.object({
        employee_salary: Yup.string().required("Employee salary is required"),
        employee_account: Yup.string().required("Employee account is required"),
        employee_bank: Yup.string().required("Employee bank is required"),
        branch_code: Yup.string().required("Branch code is required"),
      }),
      documents: Yup.object({
        document_type: Yup.string().required("Document type is required"),
      }),
      references: Yup.object({
        reference_name: Yup.string().required("Reference name is required"),
        reference_phone: Yup.string().required("Reference phone is required"),
      }),
      dependants: Yup.object({
        first_name: Yup.string().required("Dependant's first name is required"),
        last_name: Yup.string().required("Dependant's last name is required"),
        gender: Yup.string().required("Dependant's gender is required"),
        age: Yup.number().required("Dependant's age is required"),
        relationship: Yup.string().required(
          "Dependant's relationship is required"
        ),
      }),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to add employee");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
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
              name="profile_picture"
              value={formik.values.profile_picture}
              placeholder="Profile Picture"
              onChange={formik.handleChange}
            />

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
              type="text"
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

            <InputField
              type="checkbox"
              name="active_status"
              value={formik.values.active_status}
              placeholder="Active status"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="marital_status"
              value={formik.values.marital_status}
              placeholder="Marital status"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="date_joined"
              value={formik.values.date_joined}
              placeholder="Date joined"
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Emergency Contacts Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Emergency Contacts Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="emergency_contacts.first_name"
              value={formik.values.emergency_contacts.first_name}
              placeholder="Emergency Contact first name"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="emergency_contacts.last_name"
              value={formik.values.emergency_contacts.last_name}
              placeholder="Emergency Contact last name"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="emergency_contacts.gender"
              value={formik.values.emergency_contacts.gender}
              placeholder="Emergency Contact gender"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="emergency_contacts.phone"
              value={formik.values.emergency_contacts.phone}
              placeholder="Emergency Contact phone no:"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="emergency_contacts.relationship"
              value={formik.values.emergency_contacts.relationship}
              placeholder="Emergency Contact Relationship"
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
              name="bankdetails.employee_salary"
              value={formik.values.bankdetails.employee_salary}
              placeholder="Employee Salaries"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="bankdetails.employee_account"
              value={formik.values.bankdetails.employee_account}
              placeholder="Employee Account"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="bankdetails.employee_bank"
              value={formik.values.bankdetails.employee_bank}
              placeholder="Employee Bank"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="bankdetails.branch_code"
              value={formik.values.bankdetails.branch_code}
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
          className="bg-[#CBF2FF] hover:bg-[#F9DDEE] displaycards text-black font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
