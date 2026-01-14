import { useContext } from "react";
import { counterContext } from "./UseContextIncrement";

const UseContextIncrement1 = () => {
  const context = useContext(counterContext);

  // Safety check (VERY IMPORTANT in TypeScript)
  if (!context) {
    throw new Error("UseContextIncrement1 must be used inside CounterContext.Provider");
  }

  const { count, setCount } = context;

  return (
    <div className="bg-indigo-800 text-white h-screen flex  justify-center items-center">
      <h2 className="text-center text-3xl">Count: {count}</h2>

      <button className="bg-indigo-700 text-white rounded  px-4 py-2 gap-4" onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>

      <button className="bg-indigo-700 text-white rounded px-4 py-2 gap-4 " onClick={() => setCount(prev => prev - 1)}>
        Decrement
      </button>

      <button className="bg-indigo-700 text-white rounded px-4 py-2 gap-4 " onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseContextIncrement1;
