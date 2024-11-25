import React, {SetStateAction} from "react";

interface DegreesInputProp {
   setInput?: React.Dispatch<SetStateAction<number | undefined>>;
}

const DegreesInput: React.FC<DegreesInputProp> = ({setInput}) => {
   return (
      <>
         <label htmlFor="degrees">Degrees</label>
         <input
            type="number"
            id="degrees"
            onChange={(e) => {
               if (setInput)
                  setInput(Number(e.target.value));
            }}/>
      </>
   );
};

export default DegreesInput;