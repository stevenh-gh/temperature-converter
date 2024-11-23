import React from "react";

const TempType: React.FC = () => {
   return (
      <>
         <label htmlFor="type">Type</label>
         <select name="type" id="type">
            <option value="fahrenheit">Fahrenheit</option>
            <option value="celsius">Celsius</option>
         </select>
      </>
   );
};

export default TempType;