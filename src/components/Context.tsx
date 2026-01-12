import { useContext } from "react";
import { user } from "./Usecontext";
const ContextA = () => {
    const val=useContext(user)
  return (
       <div>
          {val}
       </div>
  )
};

export default ContextA;