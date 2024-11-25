import React, {SetStateAction} from "react";
import {resultPack} from "../App.tsx";

interface ConvertProp {
   num?: number,
   degType?: string
   setResult?: React.Dispatch<SetStateAction<resultPack | undefined>>
}

const Convert: React.FC<ConvertProp> = ({num, degType, setResult}: ConvertProp) => {
   const calculate = (): void => {
      if (setResult === undefined || num === undefined)
         return;
      if (degType === "fahrenheit")
         setResult({
            calculatedResult: (num - 32) / 1.8,
            flippedDegreeType: "celsius"
         });
      else
         setResult({
            calculatedResult: num * 1.8 + 32,
            flippedDegreeType: "fahrenheit"
         });
   };

   return (
      <>
         <button onClick={calculate}>Convert</button>
      </>
   );
};

export default Convert;