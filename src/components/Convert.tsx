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
      <div className="is-flex">
         <button className="button is-primary has-text-white is-align-content-flex-end" onClick={calculate}>Convert
         </button>
      </div>
   );
};

export default Convert;