import DegreesInput from "./components/DegreesInput.tsx";
import TempType from "./components/TempType.tsx";
import Convert from "./components/Convert.tsx";
import Result from "./components/Result.tsx";
import {useState} from "react";

export interface resultPack {
   calculatedResult: number,
   flippedDegreeType: string
}

const App = () => {
   const [input, setInput] = useState<number | undefined>(undefined);
   const [temp, setTemp] = useState<string | undefined>(undefined);
   const [result, setResult] = useState<resultPack | undefined>(undefined);

   return (
      <>
         <h1>Temperature Converter</h1>
         <DegreesInput setInput={setInput}/>
         <TempType setTemp={setTemp}/>
         <Convert num={input} degType={temp} setResult={setResult}/>
         <Result num={result?.calculatedResult} degType={result?.flippedDegreeType}/>
      </>
   );
};

export default App;
