import A from "./components/A";
import B from "./components/B";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <A count={count} increase={increase} />
      <B decrease={decrease} />
    </div>
  );
};

export default App;
