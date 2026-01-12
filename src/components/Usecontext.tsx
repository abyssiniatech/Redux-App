import { createContext, useState } from "react";
import ContextA from "./Context";
import ContextB from "./ContextB";



export const user= createContext <React.Context<null>>(null)

const Usecontext = () => {
  const [name,setname] = useState("surafel")
  return (
    <div>
   <user.Provider value={name}>
     <ContextA />
     <ContextB />
   </user.Provider>
    </div>
  )
};

export default Usecontext;