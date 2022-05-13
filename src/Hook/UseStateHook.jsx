import React,{useState} from 'react';

export default function UseStateHook() {

    const [count,setCount] = useState(0);


    const increment = () =>{
        setCount(count + 1);
    }

    const decrmetnt = () =>{
        setCount(count -1);
    }


  return (
    <div>
        <button onClick={()=>increment()}>+</button>
        <label>{count}</label>
        <button onClick={()=>decrmetnt()}>-</button>
    </div>
  );
}
