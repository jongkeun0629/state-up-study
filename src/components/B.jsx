import E from "./E";

const B = ({ decrease }) => {
  return (
    <div className="bg-blue-400 m-12 p-12">
      B
      <E decrease={decrease} />
    </div>
  );
};

export default B;
