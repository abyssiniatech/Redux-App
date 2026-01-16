import type { MouseEventHandler } from "react";

export type counterProp ={
    handleInc: MouseEventHandler<HTMLButtonElement> | undefined;
    count:number
    setCount:()=>void;

}
const Counter = (props:counterProp) => {
   
  return (
    <div>
       <p>the value is : {props.count}</p>
       <button onClick={props.handleInc}  className="bg-indigo-900 text-white rounded px-4 py-2 border-0">Increment</button>
    </div>
  )
}

export default Counter
