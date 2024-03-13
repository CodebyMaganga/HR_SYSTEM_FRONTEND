import { useNavigate } from "react-router-dom";

function AddButtons({ navigationFunction, text }) {
  return (
    <div className="container">
      <button
        onClick={navigationFunction}
        className="bg-[#EEAD49] hover:bg-white text-black hover:text-black p-[6px] hover: border border-[#EEAD49] font-bold py-2 px-4 rounded-full m-6 absolute top-14 right-5"
      >
        + {text}
      </button>
    </div>
  );
}

export default AddButtons;
