import React, { useState , useContext } from 'react';
import Calculator from './Calculator';
import UseContextWrk2 from './UseContextWrk2';

export const newContext = React.createContext();
export default function UseContextWrk() {
  const[count,setCount]=useState(0); 
  const increment=()=>{
    setCount(count+1);
} 

  return(
    <div>
      <newContext.Provider value={count}>
              {/* <UseContextWrk2 /> */}
              <Calculator/>
      </newContext.Provider>
        
        <button onClick={()=>increment()}>Click</button>
    </div>
  );
}
