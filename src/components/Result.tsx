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
      <div>
         <div className="title is-5 label">Result</div>
         {num !== undefined && (
            <div>
               <span data-testid="result">{num.toFixed(2) + " "}</span>
               <span>°{degTypeMap.get(degType!)}</span>
            </div>
         )}
      </div>
   );
};


export default Result;