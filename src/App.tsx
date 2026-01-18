import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "./app/store";
import { increment, decrement, reset } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux Counter</h2>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
