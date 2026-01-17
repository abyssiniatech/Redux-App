import { useRef, useState } from "react"
// type counterprop ={
//     counter:number,
//     setCounter:React.ReactNode
// }
const UseRef = () => {
    const [counter,setCounter] = useState<number>(0)
    const inputref=useRef<HTMLInputElement | null>(null)
  const handlefocus =() =>{
    inputref.current?.focus()
    setCounter(prev => prev+1)
  }
  return (
    <div>
        <input type="text" ref={inputref} placeholder="name" className="w-[80%] p-4 rounded" />
        <button onClick={handlefocus} className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-end   ">Focus</button>
        <p className="bg-teal-700 m-auto w-16 h-16 p-4 text-3xl rounded-full flex text-white items-center justify-center">{counter}</p>
    </div>
  )
}

export default UseRef
