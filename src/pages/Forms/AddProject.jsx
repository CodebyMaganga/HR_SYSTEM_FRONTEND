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

function AddProject() {
  const formik = useFormik({
    initialValues: {
      title: "",
      project_status: "",
      // project_employees: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("the project title is required"),
      project_status: Yup.string().required("the project status is required"),
      // project_employees: Yup.string().required(
      //   "Project employees are required"
      // ),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/projects`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to add Project");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("Unable to add projects", error.message);
        toast.error("Failed to add projects " + error.message);
      }
    },
  });
  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Job applicant Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="title"
              value={formik.values.title}
              placeholder="Enter Project Title"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="project_status"
              value={formik.values.project_status}
              placeholder="Enter the status of project"
              onChange={formik.handleChange}
            />
            {/* <InputField
              type="text"
              name="project_employees"
              value={formik.values.project_employees}
              placeholder="Employees assigned to project"
              onChange={formik.handleChange}
            /> */}
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

export default AddProject;
