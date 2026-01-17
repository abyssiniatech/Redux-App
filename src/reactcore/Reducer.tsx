import { useReducer } from "react"
const initial = 0
type Action =
   |{ type: "INCREMENT" }
   |{ type: "DECREMENT" }
   |{ type: "RESET" }
const reducer = (state:number,action:Action) =>{
   switch(action.type){
    case "INCREMENT" :
        return state+1
        break;
     case "RESET" :
        return initial
        break;
     case "DECREMENT" :
        return state-1
        break;
    default :
       return state
   }
}
const Reducer = () => {
    // create reducer hook
    const [state,dispatch] = useReducer(reducer,initial)
  return (
    <div className="bg-indigo-900 text-white flex justify-center  flex-col h-screen items-center">
     <section className="bg-indigo-800 shadow rounded p-16 flex justify-center items-center flex-col ">
      <p>{state}</p>
      <button onClick={() =>dispatch({type:"INCREMENT"})} className="px-8 py-4 rounded bg-teal-700 y text-2xl text-white  m-4">Incremnet</button>
      <button onClick={() =>dispatch({type:"RESET"})} className="px-8 py-4 rounded bg-teal-700 y text-2xl text-white m-4 ">Reset</button>
      <button onClick={() =>dispatch({type:"DECREMENT"})} className="px-8 py-4 rounded bg-teal-700 y text-2xl text-white m-4 ">Decrement</button>
     </section>
    </div>
  )
}

export default Reducer
