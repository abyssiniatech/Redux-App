import { createContext } from "react"

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const userContext = createContext<string | null>(null);
const UseContext = () => {
  const user="surafel mengist"
  return (
    <div>
      {/* create provider function */}
      <userContext.Provider value={user}>

      </userContext.Provider>
    </div>
  )
}

export default UseContext
