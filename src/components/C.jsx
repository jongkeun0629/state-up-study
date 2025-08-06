import { useCount } from "../context/CountContext";

const C = () => {
  const { count } = useCount();

  return <div className="bg-green-400 m-12 p-12">C {count}</div>;
};

export default C;
