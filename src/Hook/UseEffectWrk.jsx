import React,{ useState , useEffect } from 'react';

export default function UseEffectwrk() {
    const[count,setCount] = useState(0);
    useEffect(() => {
      
         document.title=`You clicked ${count} times.`;
    });  
  return(
    <div>
        <label>Clicked {count} times</label>
        <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  );
}
