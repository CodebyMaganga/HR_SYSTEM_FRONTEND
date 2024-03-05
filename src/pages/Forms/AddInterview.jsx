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

function AddInterview() {
  const formik = useFormik({
    initialValues: {
      time: "",
      application_id: "",
    },
    validationSchema: Yup.object({
      time: Yup.string().required("Time allocated for interview is required"),
      applicant_id: Yup.string().required("Applicant no is required"),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/interviews`, {
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
        console.log("Unable to add interviews", error.message);
        toast.error("Failed to add interviews: " + error.message);
      }
    },
  });
  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Interview Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Interviews Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="text"
              name="time"
              value={formik.values.time}
              placeholder="Enter interview allocated time:"
              onChange={formik.handleChange}
            />

            <InputField
              type="text"
              name="applicant_id"
              value={formik.values.applicant_id}
              placeholder="Enter the application No:"
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

export default AddInterview;
