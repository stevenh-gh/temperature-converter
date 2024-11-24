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
         {num && (
            <>
               <span>{num}</span>
               <span>°{degTypeMap.get(degType!)}</span>
            </>
         )}
      </>
   );
};


export default Result;