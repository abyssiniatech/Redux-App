// import { useReducer } from "react";

// const intial =0
// function reducer(action,state){
//  switch(action.type){
//   case "INCREMENT":
//     return state+1;
//     break;
//   case "DECREMENT":
//     return state-1;
//     break;
//   case "RESET":
//      return intial
//   break;
//   default:
//     return state
//      break;
//  }
// }

// const Usereducer = () => {
//   const[state,dispatch]=useReducer(reducer,intial)
//   return (
//     <div>
//       <p>count: {state}</p>
//        <button onClick={() => dispatch({ type: "INCREMENT" })}>
//         Increment
//       </button>

//       <button onClick={() => dispatch({ type: "DECREMENT" })}>
//         Decrement
//       </button>

//       <button onClick={() => dispatch({ type: "RESET" })}>
//         Reset
//       </button>
//     </div>
//   )
// };

// export default Usereducer;

import { useReducer } from "react";

// 1️⃣ Initial State
const initialState = 0;

// 2️⃣ Reducer Function
function reducer(state, action) {
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
