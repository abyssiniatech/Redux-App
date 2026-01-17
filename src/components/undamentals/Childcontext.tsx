import { useContext } from "react"
import {userContext} from "./UseContext"
const Childcontext = () => {
    const val=useContext(userContext)
  return (
    <div>
         <p>my name is {val}</p>
    </div>
  )
}

export default Childcontext
