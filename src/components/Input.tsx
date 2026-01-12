import { useState } from "react";


const Input = () => {
 const [name,setName] = useState("surafel")
  return (
    <div>
      <label htmlFor="name">Name:{name}</label>
      <input type="text"   value={name} placeholder="enter your name"
      onChange={(e)=>setName(e.target.value)}
      />
    </div>
  )
};

export default Input;