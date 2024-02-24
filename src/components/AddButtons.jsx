import { useNavigate } from "react-router-dom";

function AddButtons({ navigationFunction, text }) {
  return (
    <div>
      <button
        onClick={navigationFunction}
        className=" bg-violet-300 hover:bg-violet-300 text-black font-bold py-2 px-4 rounded-full m-6 absolute top-14 right-5"
      >
        + {text}
      </button>
    </div>
  );
}

export default AddButtons;
