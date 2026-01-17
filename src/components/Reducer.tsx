import { useReducer } from "react"

const initial  =0
function reducer (state:number,action: { type: string; }){
     switch(action.type){
        case "INCREMENT":
            return state+1
            break;
         case "DECREMENT":
            return state-1
            break;
         case "RESET":
            return initial
            break;
        default:
            return state;
     }
}
const Reducer = () => {
    const [state,dispatch] = useReducer(reducer,initial)
  return (
    <div className="bg-indigo-900 text-white h-screen flex justify-center items-center">
       <section className="bg-indigo-700 text-white  p-12 m-2 rounded">
         <p className="text-center text-3xl">{state}</p>
        <button className="bg-teal-900 m-4 text-white px-4 py-2 rounded hover:bg-teal-800" onClick={()=>dispatch({ type:"INCREMENT" })}>Increment</button>
        <button className="bg-teal-900 m-4 text-white px-4 py-2 rounded hover:bg-teal-800" onClick={()=>dispatch({ type:"DECREMENT" })}>Decrement</button>
        <button className="bg-teal-900 m-4 text-white px-4 py-2 rounded hover:bg-teal-800" onClick={()=>dispatch({ type:"RESET" })}>Decrement</button>
       </section>
    </div>
  )
}

export default Reducer
