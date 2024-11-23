import React from "react";

const DegreesInput: React.FC = () => {
   return (
      <>
         <label htmlFor="degrees">Degrees</label>
         <input type="number" id="degrees"/>
      </>
   );
};

export default DegreesInput;