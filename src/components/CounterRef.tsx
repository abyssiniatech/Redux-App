import { useRef } from "react";
const CounterRef = () => {
    const intial=0;
     const counterRef=useRef(intial);
     const handleinc =() =>{
        const res=counterRef.current +=1;
        console.log(res)
     }

  return (
    <div>
      <h1> Times counter</h1>
      <button onClick={handleinc}>Increment</button>

    </div>
  )
}

export default CounterRef
