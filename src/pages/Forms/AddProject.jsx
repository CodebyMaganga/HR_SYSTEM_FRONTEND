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

        if (res.ok) {
          toast.success("Project added successfully");
          formikBag.resetForm();
        } else {
          toast.error("Failed to add projects");
        }
      } catch (error) {
        console.log("Unable to add projects", error.message);
        toast.error("Failed to add projects " + error.message);
      }
    },
  });
  return (
    <div className="w-2/4 mx-auto bg-white p-4 rounded">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Job applicant Details Section */}
        <div className="border border-[#EEAD49] p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Project Title"
              name="title"
              required={true}
              placeholder="Enter project title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />

            <DropdownField
              label="Project status"
              name="project_status"
              required={true}
              value={formik.values.project_status}
              onChange={formik.handleChange}
              options={[
                { label: "Active ", value: "Active" },
                { label: "In progress ", value: "In progress " },
                { label: "Completed ", value: "Completed " },
                { label: "Planning", value: "Planning " },
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

export default AddProject;
