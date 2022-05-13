import React, { useState }  from 'react';

export default function UseStateWrk() {
    const[count,setCount] = useState(0);
     const increment=()=>{
        setCount(count+1);
    }
  return(
    <div>
        <h3>Incremeting nos by clicking button</h3>
        <label>Number: {count}</label><br/>
        <button onClick={()=>increment()}>INCREMENT</button>
    </div>
  );
}
