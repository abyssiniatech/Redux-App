import { useContext } from "react";
import { CounterContext } from "./IncrementContext";

const Increment = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Increment must be used inside CounterContext.Provider");
  }

  const { count, setCount } = context;

  return (
    <div>
      <p>{count}</p>

      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-pink-800 text-white p-6"
      >
        Increment
      </button>
    </div>
  );
};

export default Increment;
