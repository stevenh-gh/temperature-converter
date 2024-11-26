import React, {SetStateAction} from "react";

interface DegreesInputProp {
   setInput?: React.Dispatch<SetStateAction<number | undefined>>;
}

const DegreesInput: React.FC<DegreesInputProp> = ({setInput}) => {
   return (
      <div className="field">
         <label htmlFor="degrees" className="title is-5 label">Degrees</label>
         <div className="control"><input
            className="input"
            type="number"
            id="degrees"
            onChange={(e) => {
               if (setInput)
                  setInput(Number(e.target.value));
            }}/>
         </div>
      </div>
   );
};

export default DegreesInput;