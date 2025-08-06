import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
