import { useReducer, useState } from "react";
const initialState ="Beti"
const reducer = (state: string, action: Action): string => {
  switch (action.type) {
    case "CHANGE_NAME":
      return "Surafel Mengist"; // new state
    default:
      return state; // IMPORTANT
  }
};

const NameReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const[show,setShow] = useState<boolean>(true)
  return (
    <div>
      <p className="bg-indigo-950 text-white text-center rounded ">{state}</p>
      <button className="flex m-auto bg-pink-700 text-white rounded  px-6 py-3  justify-center items-center" onClick={() => dispatch({ type: "CHANGE_NAME" })} >
        {!show?"change name" : "Original name"}
      </button>
    </div>
  );
};

export default NameReducer;
