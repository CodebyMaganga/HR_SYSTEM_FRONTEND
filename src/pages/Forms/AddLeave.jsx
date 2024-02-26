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

function AddLeave() {
  const formik = useFormik({
    initialValues: {
      leave_from: "",
      leave_to: "",
      leave_type: "",
      leave_letter: "",
      employees_on_leave: "",
    },
    validationSchema: Yup.object({
      leave_from: Yup.string().required("the day of leave is required"),
      leave_to: Yup.string().required("last day of leave is required"),
      leave_type: Yup.string().required("Type of leave  is required"),
      leave_letter: Yup.string().required("leave letter is required"),
    }),
    onSubmit: async (values, formikBag) => {
      try {
        const res = await fetch(`${BASE_URL}/leaves`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Failed to add Leave");
        }

        if (data.statusCode === 200) {
          toast.success(data.message);
          formikBag.resetForm();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log("Unable to add leaves", error.message);
        toast.error("Failed to add leaves " + error.message);
      }
    },
  });
  return (
    <div className="container bg-white mx-auto p-4">
      <form className="space-y-8" onSubmit={formik.handleSubmit}>
        {/*   Job applicant Details Section */}
        <div className="border border-black p-4 rounded-md">
          <h2 className="font-bold text-xl mb-4">Leave Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              type="date"
              name="first_name"
              value={formik.values.leave_from}
              placeholder="Enter Day of leave"
              onChange={formik.handleChange}
            />
            <InputField
              type="date"
              name="last_name"
              value={formik.values.leave_to}
              placeholder="Enter last day of leave"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="photo"
              value={formik.values.leave_type}
              placeholder="Enter the type of leave"
              onChange={formik.handleChange}
            />
            <InputField
              type="text"
              name="email"
              value={formik.values.leave_letter}
              placeholder="Enter the letter of leave"
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

export default AddLeave;
