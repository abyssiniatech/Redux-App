import { useState } from "react";


const Counter = () => {
    const [count,setCount] =useState<number>(0)
    const [show,setshow] =useState(true)
    const handleres=()=>{
        setCount(0)
    }
    const handleinc =()=>{
         setCount(prev=>prev+1)
    }
    const handledec = ()=>{
        setCount(prev=>prev-1)
    }
    const handleshow =() =>{
        setshow(show => !show)
    }
  return (
      <div className="bg-indigo-900 h-screen flex flex-col items-center justify-center ">
   {
       show && 
       <div className="bg-indigo-900  items-center h-screen flex justify-center flex-col rounded p-6 text-2xl text-white font-bold">
        <header className=" m-4 p-4 flex flex-col gap-20 items-center justify-between">
            <h1 className="text-4xl">Counter app</h1>
            <p className="text-4xl">{count}</p>
        </header>
        <main className="flex justify-center items-center gap-4">
             <button onClick={handledec} className="bg-blue-700 text-white rounded px-8 py-4  hover:bg-blue-600 border-0 text-center">Decrement</button>
             <button onClick={handleres} className="bg-blue-700 text-white rounded px-8 py-4  hover:bg-blue-600 border-0 text-center">Reset</button>
             <button onClick={handleinc} className="bg-blue-700 text-white rounded px-8 py-4  hover:bg-blue-600 border-0 text-center">Increment</button>
        </main>
      </div>
}
        <button className="bg-teal-800 rounded flex justify-center items-center text-white text-2xl p-3 " onClick={handleshow}>{!show ? "hide" :"show"}</button>
        {/* show and hide the components */}
 
    </div>
  )
};

export default Counter;
