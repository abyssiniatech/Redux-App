import { useSelector, useDispatch } from "react-redux";
import type { RootState,AppDispatch } from "./store";
import { reset,increment, decrement,incrementByAmount } from "./counterSlice";

const Increment = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="h-screen bg-blue-900 text-white">
      <h1>Counter: {count}</h1>
        <section>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </section>
    </div>
  );
};

export default Increment;
