import { useState } from "react";

const Agestate = () => {
    const [count,setCount] = useState<number>(0);
   const handleInc =() =>{
     setCount((prev: number)=>prev+1)
   }
    return (
    <div className="bg-indigo-900 text-white text-3xl rounded h-screen flex justify-center items-center ">
      <h1>welcome : {count} </h1>
      <button className='bg-teal-700 px-4 py-4 rounded-full m-4' onClick={handleInc}>+</button>
    </div>
  )
}

export default Agestate
