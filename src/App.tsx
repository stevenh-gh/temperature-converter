import DegreesInput from "./components/DegreesInput.tsx";
import TempType from "./components/TempType.tsx";
import Convert from "./components/Convert.tsx";
import Result from "./components/Result.tsx";

const App = () => {

   return (
      <>
         <h1>Temperature Converter</h1>
         <DegreesInput/>
         <TempType/>
         <Convert/>
         <Result/>
      </>
   );
};

export default App;
