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

function AddJobapplicant() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      photo: "",
      email: "",
      address: "",
      experience: "",
      role_applied: "",
      status: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("first name is required"),
      last_name: Yup.string().required("last name is required"),
      photo: Yup.string().required("Profile photo  is required"),
      email: Yup.string().required("email is required"),
      address: Yup.string().required("address is required"),
      experience: Yup.string().required("experience is required"),
      role_applied: Yup.string().required("role_applied is required"),
      status: Yup.string().required("status is required"),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/job_applicants`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (res.ok) {
          toast.success("Applicant added successfully");
          formikBag.resetForm();
        } else {
          toast.error("Failed to add job applicants");
        }
      } catch (error) {
        console.log("Unable to add job applicants", error.message);
        toast.error("Failed to add job applicants " + error.message);
      }
    },
  });
  return (
    <div className="w-2/4 mx-auto bg-white p-4 rounded">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Job applicant Details Section */}
        <h2 className="font-bold text-xl mb-2 text-center">
          Job Applicant Details
        </h2>
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              name="first_name"
              required={true}
              placeholder="Enter First Name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
            />

            <InputField
              label="Last Name"
              name="last_name"
              required={true}
              placeholder="Enter Last Name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
            />

            <InputField
              label="Profile Photo"
              name="photo"
              required={true}
              placeholder="Enter Profile photo"
              value={formik.values.photo}
              onChange={formik.handleChange}
            />

            <InputField
              label="Email"
              name="email"
              required={true}
              placeholder="Enter the email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            <InputField
              label="Physical Address"
              name="address"
              required={true}
              placeholder="Enter the address"
              value={formik.values.address}
              onChange={formik.handleChange}
            />

            <DropdownField
              label="Years of experience"
              name="experience"
              required={true}
              value={formik.values.experience}
              onChange={formik.handleChange}
              options={[
                { label: "Iyr ", value: "1yr " },
                { label: "2yrs ", value: "2yrs " },
                { label: "3yrs ", value: "3yrs " },
                { label: "4yrs ", value: "4yrs " },
                { label: "5yrs ", value: "5yrs " },
                { label: "6yrs ", value: "6yrs " },
                { label: "7yrs ", value: "7yrs " },
                { label: "8yrs ", value: "8yrs " },
                { label: "9yrs ", value: "9yrs " },
                { label: "10yrs ", value: "10yrs " },
              ]}
            />

            <DropdownField
              label="Role applied"
              name="role_applied"
              required={true}
              value={formik.values.role_applied}
              onChange={formik.handleChange}
              options={[
                { label: "Teacher's Aide", value: "Teacher's Aide" },
                { label: "School Counselor", value: "School Counselor" },
                { label: "Librarian", value: "Librarian" },
                { label: "Principal", value: "Principal" },
                { label: "School Nurse", value: "School Nurse" },
                {
                  label: "Special Education Teacher",
                  value: "Special Education Teacher",
                },
                {
                  label: "School Administrator",
                  value: "School Administrator",
                },
                { label: "School Psychologist", value: "School Psychologist" },
                { label: "School Secretary", value: "School Secretary" },
                { label: "School Custodian", value: "School Custodian" },
                { label: "School Bus Driver", value: "School Bus Driver" },
                {
                  label: "School Social Worker",
                  value: "School Social Worker",
                },
                {
                  label: "School Speech Therapist",
                  value: "School Speech Therapist",
                },
                {
                  label: "School Resource Officer",
                  value: "School Resource Officer",
                },
                {
                  label: "School Food Service Worker",
                  value: "School Food Service Worker",
                },
              ]}
            />

            <DropdownField
              label="Application status"
              name="status"
              required={true}
              value={formik.values.status}
              onChange={formik.handleChange}
              options={[
                { label: "Applied", value: "Applied" },
                {
                  label: "Application Withdrawn",
                  value: "Application Withdrawn",
                },
                { label: "Not Selected", value: "Not Selected" },
                { label: "Pending Response", value: "Pending Response" },
                { label: "Hired", value: "Hired" },
              ]}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-[#EEAD49] text-black p-[6px] hover: border border-[#EEAD49] displaycards font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddJobapplicant;
