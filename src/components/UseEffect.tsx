// import {Usestate,useEffect} from "react"

import { useEffect, useState } from "react";



// const UseEffect = () => {
//     const [car,setcar] useState({
//         name:"",
//         year:2025,
//         color:"red"
//     })
//     useEffect(() => {
//          setTimeout(() =>{
//            setcar((e:React.ReactEventHandler<InputEvent>)=>(e.target.value))
//          },2000)
//       return () => {
        
//       };
//     }, [])
//   return (
//     <div>
//         <header>
//             <h2>{car.name}</h2>
//             <h2>{car.year}</h2>
//             <h2>{car.color}</h2>
//         </header>
//     <label htmlFor="car">Car</label>
//     <input onChange={handleinput} type="text" value={car.name} />
//     <input onChange={handleinput} type="number" value={car.year} />
//     <input onChange={handleinput} type="text" value={car.color} />
//     </div>
//   )
// };

// export default UseEffect;



const UseEffect = () => {
  const [count,setCount] =useState(0)
   const inc=()=>{
    setCount(count+1)
   }
  useEffect(()=>{
    document.title = `${count} times rendered`
  },[])
  return (
    <div>
       <button onClick={inc}>Increment</button>
    </div>
  )
};

export default UseEffect;