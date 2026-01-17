import { createContext, useState } from "react"
import IncrementContextChild from "./IncrementContextChild"

type IncrementContextType = {
  count: number
  increment: () => void
}

export const IncrementContext = createContext<IncrementContextType | null>(null)

const IncrementContextProvider = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <IncrementContext.Provider value={{ count, increment }}>
      <IncrementContextChild />
    </IncrementContext.Provider>
  )
}

export default IncrementContextProvider
