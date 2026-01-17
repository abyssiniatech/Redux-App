import { createContext, useState } from "react"
import UseContextIncrement1 from "./UseContextIncrement1";
type CounterContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
// eslint-disable-next-line react-refresh/only-export-components
export const counterContext=createContext<CounterContextType | undefined>(undefined);

const UseContextIncrement = () => {
  const [count,setCount] =useState<number>(0)
    return (
    <div>
      <counterContext.Provider value={{count,setCount}}>
        <UseContextIncrement1 />
      </counterContext.Provider>
    </div>
  )
}

export default UseContextIncrement
