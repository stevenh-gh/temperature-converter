import DegreesInput from "./components/DegreesInput.tsx";
import TempType from "./components/TempType.tsx";
import Convert from "./components/Convert.tsx";
import Result from "./components/Result.tsx";
import {useState} from "react";
import "./App.css";

export interface resultPack {
   calculatedResult: number,
   flippedDegreeType: string
}

const App = () => {
   const [input, setInput] = useState<number | undefined>(undefined);
   const [temp, setTemp] = useState<string | undefined>("fahrenheit");
   const [result, setResult] = useState<resultPack | undefined>(undefined);

   return (
      <div className="container" style={{maxWidth: "500px"}}>
         <div className="fixed-grid has-3-cols">
            <div className="grid">
               <h1 className="title is-1 cell is-col-span-3 has-text-centered">Temperature Converter</h1>
               <DegreesInput setInput={setInput}/>
               <TempType setTemp={setTemp}/>
               <Convert num={input} degType={temp} setResult={setResult}/>
               <Result num={result?.calculatedResult} degType={result?.flippedDegreeType}/>
            </div>
         </div>
      </div>
   );
};

export default App;
