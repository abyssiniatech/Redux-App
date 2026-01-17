import { useRef } from "react"
const CounterRef = () => {
const counterRef= useRef<number>(0)
//   some logic related with the project 
const handleincrement =() =>{
    console.log(counterRef.current +=1)
}
  return (
    <div>
    <p>counter app </p>
    <button  onClick={handleincrement}>Increment</button>
    </div>
  )
}

export default CounterRef
