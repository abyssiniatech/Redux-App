import { useSelector, useDispatch } from "react-redux";
import type { RootState,AppDispatch } from "./store";
import { reset,increment, decrement,incrementByAmount } from "./counterSlice";

const Increment = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="h-screen bg-blue-900 flex text-white items-center justify-center" >
      <h1 className="text-center" >Counter: {count}</h1>
        <section>
            <button className="bg-indigo-700 text-2xl px-4 py-2 m-2 rounded shadow-md" onClick={() => dispatch(increment())}>Increment</button>
            <button className="bg-indigo-700 text-2xl px-4 py-2 m-2 rounded shadow-md" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="bg-indigo-700 text-2xl px-4 py-2 m-2 rounded shadow-md" onClick={() => dispatch(reset())}>reset</button>
            <button className="bg-indigo-700 text-2xl px-4 py-2 m-2 rounded shadow-md" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </section>
    </div>
  );
};

export default Increment;
