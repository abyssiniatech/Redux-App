/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode } from "react";
import Increment from "./Increment";

type CounterContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

const IncrementContext = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Increment />
    </CounterContext.Provider>
  );
};

export default IncrementContext;
