import { useCount } from "../context/CountContext";

const E = () => {
  const { decrease } = useCount();

  return (
    <div className="bg-yellow-400 m-12 p-12">
      E <button onClick={decrease}>감소</button>
    </div>
  );
};

export default E;
