import React, {SetStateAction} from "react";

interface TempTypeProp {
   setTemp?: React.Dispatch<SetStateAction<string | undefined>>;
}

const TempType: React.FC<TempTypeProp> = ({setTemp}: TempTypeProp) => {
   return (
      <>
         <label htmlFor="type">Type</label>
         <select name="type" id="type" onChange={(e) => {
            if (setTemp)
               setTemp(e.target.value);
         }}>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="celsius">Celsius</option>
         </select>
      </>
   );
};

export default TempType;