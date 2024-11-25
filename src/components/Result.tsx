import React from "react";

interface ResultProps {
   num?: number;
   degType?: string;
}

const Result: React.FC<ResultProps> = ({num, degType}: ResultProps) => {
   const degTypeMap = new Map<string, string>([
      ["fahrenheit", "F"],
      ["celsius", "C"]
   ]);

   return (
      <>
         <div>Result</div>
         {num !== undefined && (
            <>
               <span data-testid="result">{num.toFixed(2)}</span>
               <span>°{degTypeMap.get(degType!)}</span>
            </>
         )}
      </>
   );
};


export default Result;