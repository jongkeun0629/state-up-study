import A from "./components/A";
import B from "./components/B";
import { CountProvider } from "./context/CountContext";

const App = () => {
  return (
    <CountProvider>
      <div className="bg-red-100 min-h-screen flex justify-center items-center">
        <A />
        <B />
      </div>
    </CountProvider>
  );
};

export default App;
