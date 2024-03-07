import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
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
      companyproperties: {
        category: "",
        brand: "",
        description: "",
        condition: "",
        serial_number: "",
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
      companyproperties: Yup.object({
        category: Yup.string().required("Categoty is required"),
        brand: Yup.string().required("Brand is required"),
        description: Yup.string().required("Descriptionis required"),
        condition: Yup.string().required("Condition is required"),
        serial_number: Yup.string().required("Serial number is required"),
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
    <div className="w-2/4 mx-auto bg-white p-4 rounded">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/* Personal Details Section */}
        <h2 className=" font-bold text-xl mb-2 text-center">
          Personal Details
        </h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Profile Picture"
              name="profile_picture"
              value={formik.values.profile_picture}
              onChange={formik.handleChange}
            />
            <InputField
              label="First Name"
              name="first_name"
              required={true}
              value={formik.values.first_name}
              onChange={formik.handleChange}
            />
            <InputField
              label="Last Name"
              name="last_name"
              required={true}
              value={formik.values.last_name}
              onChange={formik.handleChange}
            />
            <InputField
              label="D.O.B"
              name="DOB"
              required={true}
              value={formik.values.DOB}
              onChange={formik.handleChange}
            />
            <InputField
              label="Email"
              name="email"
              required={true}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <InputField
              label="Phone Number"
              name="phone"
              required={true}
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
            <DropdownField
              label="Gender"
              name="gender"
              required={true}
              value={formik.values.gender}
              onChange={formik.handleChange}
              options={[
                { label: "Female", value: "female" },
                { label: "Male", value: "male" },
                { label: "Prefer not to say", value: "prefer_not_to_say" },
                // Add any other relevant options here
              ]}
            />
            <InputField
              label="National ID"
              name="national_ID"
              required={true}
              value={formik.values.national_ID}
              onChange={formik.handleChange}
            />
            <InputField
              label="Address"
              name="address"
              required={true}
              value={formik.values.address}
              onChange={formik.handleChange}
            />
            <InputField
              label="Role"
              name="role"
              required={true}
              value={formik.values.role}
              onChange={formik.handleChange}
            />
            {/* <InputField
              label="Nationality"
              name="nationality"
              required={true}
              value={formik.values.nationality}
              onChange={formik.handleChange}
            /> */}

            <DropdownField
              label="Nationality"
              name="nationality"
              required={true}
              value={formik.values.nationality}
              onChange={formik.handleChange}
              options={[
                { label: "Kenyan", value: "Kenyan" },
                { label: "American", value: "American" },
                { label: "Japanese", value: "Japanese" },
                { label: "Brazilian", value: "Brazilian" },
                { label: "Australian", value: "Australian" },
                { label: "Canadian", value: "Canadian" },
                { label: "Mexican", value: "Mexican" },
                { label: "Chinese", value: "Chinese" },
                { label: "Indian", value: "Indian" },
                { label: "British", value: "British" },
                { label: "German", value: "German" },
                { label: "French", value: "French" },
                { label: "Italian", value: "Italian" },
                { label: "Russian", value: "Russian" },
                { label: "South African", value: "South African" },
                { label: "Swedish", value: "Swedish" },
                { label: "Spanish", value: "Spanish" },
                { label: "Argentinian", value: "Argentinian" },
                { label: "Turkish", value: "Turkish" },
                { label: "Saudi Arabian", value: "Saudi Arabian" },
              ]}
            />

            {/* <InputField
              //type="checkbox"
              label="Active Status"
              required={true}
              name="active_status"
              checked={formik.values.active_status}
              onChange={formik.handleChange}
            /> */}

            <DropdownField
              label="Active Status"
              name="active_status"
              required={true}
              value={formik.values.active_status}
              onChange={formik.handleChange}
              options={[
                { label: "Active", value: "Active" },
                { label: "Inactive", value: "Inactive" },

                // Add any other relevant options here
              ]}
            />
            <InputField
              label="Marital Status"
              name="marital_status"
              required={true}
              value={formik.values.marital_status}
              onChange={formik.handleChange}
            />
            <InputField
              label="Date joined"
              name="date_joined"
              required={true}
              value={formik.values.date_joined}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Emergency Contacts Details Section */}
        <h2 className="font-bold text-xl mb-4 text-center">
          Emergency Contacts Details
        </h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="space-y-4">
            <InputField
              label="Emergency Contact first name"
              name="emergency_contacts.first_name"
              required={true}
              value={formik.values.emergency_contacts.first_name}
              onChange={formik.handleChange}
            />
            <InputField
              label="Emergency Contact last name"
              name="emergency_contacts.last_name"
              required={true}
              value={formik.values.emergency_contacts.last_name}
              onChange={formik.handleChange}
            />
            <InputField
              label="Emergency Contact gender"
              name="emergency_contacts.gender"
              required={true}
              value={formik.values.emergency_contacts.gender}
              onChange={formik.handleChange}
            />
            <InputField
              label="Emergency Contact phone no:"
              name="emergency_contacts.phone"
              required={true}
              value={formik.values.emergency_contacts.phone}
              onChange={formik.handleChange}
            />
            <DropdownField
              label="Emergency Contact Relationship"
              name="emergency_contacts.relationship"
              required={true}
              value={formik.values.emergency_contacts.relationship}
              onChange={formik.handleChange}
              options={[
                { label: "Son", value: "son" },
                { label: "Daughter", value: "daughter" },
                { label: "Mother", value: "mother" },
                // Add any other relevant options here
              ]}
            />
          </div>
        </div>

        {/* Bank Details Section */}
        <h2 className="font-bold text-xl mb-4 text-center">Bank Details</h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="space-y-4">
            <InputField
              label="Employee Salaries"
              name="bankdetails.employee_salary"
              required={true}
              value={formik.values.bankdetails.employee_salary}
              onChange={formik.handleChange}
            />
            <InputField
              label="Employee Account"
              name="bankdetails.employee_account"
              required={true}
              value={formik.values.bankdetails.employee_account}
              onChange={formik.handleChange}
            />
            <InputField
              label="Employee Bank"
              name="bankdetails.employee_bank"
              required={true}
              value={formik.values.bankdetails.employee_bank}
              onChange={formik.handleChange}
            />
            <InputField
              label="Branch Code"
              name="bankdetails.branch_code"
              required={true}
              value={formik.values.bankdetails.branch_code}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Reference Details Section */}
        <h2 className="font-bold text-xl mb-4 text-center">
          Reference Details
        </h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="space-y-4">
            <InputField
              label="Reference Name"
              name="references.reference_name"
              required={true}
              value={formik.values.references.reference_name}
              onChange={formik.handleChange}
            />
            <InputField
              label="Reference Phone"
              name="references.reference_phone"
              required={true}
              value={formik.values.references.reference_phone}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Dependants Details Section */}
        <h2 className="font-bold text-xl mb-4 text-center">
          Dependants Details
        </h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="space-y-4">
            <InputField
              label="Dependants First name"
              name="dependants.first_name"
              required={true}
              value={formik.values.dependants.first_name}
              onChange={formik.handleChange}
            />
            <InputField
              label="Dependants last name"
              name="dependants.last_name"
              required={true}
              value={formik.values.dependants.last_name}
              onChange={formik.handleChange}
            />
            {/* <InputField
              label="Dependants gender"
              name="dependants.gender"
              value={formik.values.dependants.gender}
              onChange={formik.handleChange}
            /> */}

            <DropdownField
              label="Dependants gender"
              name="dependants.gender"
              required={true}
              value={formik.values.dependants.gender}
              onChange={formik.handleChange}
              options={[
                { label: "Female", value: "female" },
                { label: "Male", value: "male" },
                { label: "Prefer not to say", value: "prefer_not_to_say" },
                // Add any other relevant options here
              ]}
            />
            <InputField
              label="Dependants age"
              name="dependants.age"
              required={true}
              value={formik.values.dependants.age}
              onChange={formik.handleChange}
            />
            {/* <InputField
              label="Dependants relationship"
              name="dependants.relationship"
              value={formik.values.dependants.relationship}
              onChange={formik.handleChange}
            /> */}

            <DropdownField
              label="Dependants relationship"
              name="dependants.relationship"
              required={true}
              value={formik.values.dependants.relationship}
              onChange={formik.handleChange}
              options={[
                { label: "Son", value: "son" },
                { label: "Daughter", value: "daughter" },
                { label: "Mother", value: "mother" },
                // Add any other relevant options here
              ]}
            />
          </div>
        </div>

        {/* Company details Details Section  category: "",
        brand: "",
        description: "",
        condition: "",
        serial_number: "",*/}
        <h2 className="font-bold text-xl mb-4 text-center">
          Company Properites
        </h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="space-y-4">
            <DropdownField
              label="Property Category"
              name="companyproperties.category"
              required={true}
              value={formik.values.companyproperties.category}
              onChange={formik.handleChange}
              options={[
                { label: "Phone", value: "phone" },
                { label: "Laptop", value: "laptop" },
                { label: "Vehicle", value: "vehicle" },
                { label: "Computor", value: "computor" },
                { label: "Microscope", value: "microscope" },
                { label: "Library books", value: "library books" },
                { label: "Sports equipments", value: "equipments" },
                { label: "Classroom furniture", value: "classroom furniture" },
                {
                  label: "Interractive whiteboard",
                  value: "interactive whiteboard",
                },
              ]}
            />

            <DropdownField
              label="Property Condition"
              name="companyproperties.category"
              required={true}
              value={formik.values.companyproperties.condition}
              onChange={formik.handleChange}
              options={[
                { label: "New", value: "new" },
                { label: "Old", value: "Old" },
                { label: "Refurbished", value: "refurbished" },
              ]}
            />

            <InputField
              label="Property Brand"
              name="companyproperties.brand"
              required={true}
              placeholder={"eg; hp,toyota"}
              value={formik.values.companyproperties.brand}
              onChange={formik.handleChange}
            />

            <InputField
              label="Property SerialNumber"
              name="companyproperties.serial_number"
              required={true}
              value={formik.values.companyproperties.serial_number}
              onChange={formik.handleChange}
            />

            <InputField
              label="Property Description"
              name="companyproperties.description"
              required={true}
              placeholder={"Please enter any extra note about the propery"}
              value={formik.values.companyproperties.description}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Document Details Section */}
        <h2 className="font-bold text-xl mb-4 text-center">Document Details</h2>
        <div className="border border-[#EEAD49]  p-4 rounded-md">
          <div className="space-y-4">
            {/* <InputField
              label="Document Type"
              name="documents.document_type"
              required={true}
              placeholder={"eg; Contract, full time, part time"}
              value={formik.values.documents.document_type}
              onChange={formik.handleChange}
            /> */}

            <DropdownField
              label="Document Type"
              name="documents.document_type"
              required={true}
              value={formik.values.documents.document_type}
              onChange={formik.handleChange}
              options={[
                { label: "Resume", value: "resume" },
                { label: "CV", value: "cv" },
                { label: "Contract", value: "contract" },
              ]}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-white hover:bg-[#EEAD49] text-black p-[6px] hover: border border-[#EEAD49] displaycards font-bold py-2 px-4 rounded-full text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
