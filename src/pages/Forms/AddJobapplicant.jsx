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
      interview: "",
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
      interview: Yup.string().required("interview is required"),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/job_applicants`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to add Job Applicant");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("Unable to add job applicants", error.message);
        toast.error("Failed to add job applicants " + error.message);
      }
    },
  });
  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Job applicant Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Job Applicant Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="first_name"
              value={formik.values.first_name}
              placeholder="Enter First Name"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="last_name"
              value={formik.values.last_name}
              placeholder="Enter Job Applicant last name"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="photo"
              value={formik.values.photo}
              placeholder="Enter Profile photo"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="email"
              value={formik.values.email}
              placeholder="Enter the email"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="address"
              value={formik.values.address}
              placeholder="Enter the address"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="experience"
              value={formik.values.experience}
              placeholder="Enter Job applicant experience"
              onChange={formik.handleChange}
            />{" "}
            <InputField
              type="text"
              name="role_applied"
              value={formik.values.role_applied}
              placeholder="The role applied"
              onChange={formik.handleChange}
            />{" "}
            <InputField
              type="text"
              name="status"
              value={formik.values.status}
              placeholder="The job applicant status"
              onChange={formik.handleChange}
            />{" "}
            <InputField
              type="text"
              name="interview"
              value={formik.values.interview}
              placeholder="Enter day of interview"
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
}

export default AddJobapplicant;
