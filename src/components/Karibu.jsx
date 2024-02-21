import AddEmployee from "../pages/Forms/AddEmployee";
import { useNavigate } from "react-router-dom";

function Karibu() {

  {
    /* Navigating to AddEmployees page onClick */
  }
  const navigate = useNavigate();

  const goToAddEmployee = () => {
    navigate("/add-employee");
  };

  return (
    <div className="flex justify-between bg-gray-800 px-0  z-10">
      <div className="text-white h-[250px]">
        <h1 className="pt-4 pl-6">Karibu Admin</h1>
        <h2 className="font-bold text-2xl pl-6">Good Morning, </h2>
      </div>
      <div>
        <button onClick={goToAddEmployee} className=" bg-violet-300 hover:bg-violet-300 text-black font-bold py-2 px-4 rounded-full m-6">
          + Add Employee
        </button>
      </div>
    </div>
  );
}

export default Karibu;