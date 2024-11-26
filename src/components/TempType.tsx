import React, {SetStateAction} from "react";

interface TempTypeProp {
   setTemp?: React.Dispatch<SetStateAction<string | undefined>>;
}

const TempType: React.FC<TempTypeProp> = ({setTemp}: TempTypeProp) => {
   return (
      <div className="field">
         <label htmlFor="type" className="title is-5 label">Type</label>
         <div className="control">
            <div className="select">
               <select name="type" id="type" onChange={(e) => {
                  if (setTemp)
                     setTemp(e.target.value);
               }}>
                  <option value="fahrenheit">Fahrenheit</option>
                  <option value="celsius">Celsius</option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default TempType;