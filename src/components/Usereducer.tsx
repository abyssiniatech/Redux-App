
import { useReducer } from "react";

// 1️⃣ Initial State
const initialState = 0;

// 2️⃣ Reducer Function
function reducer(state:number, action: { type: string; }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// 3️⃣ Component
const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="bg-indigo-900 h-screen text-white flex items-center justify-center">
      <h1>Count: {state}</h1>
      <button className="bg-pink-700 text-white px-4 py-2 rounded m-2 hover:bg-pink-600" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button className="bg-pink-700 text-white px-4 py-2 rounded m-2 hover:bg-pink-600" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button className="bg-pink-700 text-white px-4 py-2 rounded m-2 hover:bg-pink-600" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default UseReducerCounter;
