
import { useDispatch,useSelector } from "react-redux";
import {type  RootState } from "./app/store";

import {increment,decrement,reset} from "./features/counter/Counter1slice"
function App(){
   const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

 return(
  <div className="bg-indigo-600 h-screen flex justify-center items-center">
     <p className="text-white">{count}</p>

     <button className="bg-teal-600 text-white px-4 py-2 rounded m-2 text-2xl" onClick={()=>dispatch(increment())}>Increment</button>
     <button className="bg-teal-600 text-white px-4 py-2 rounded m-2 text-2xl" onClick={()=>dispatch(decrement())}>Decrement</button>
     <button className="bg-teal-600 text-white px-4 py-2 rounded m-2 text-2xl" onClick={()=>dispatch(reset())}>Reset</button>
  </div>
 )
}
export default App