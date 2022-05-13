import React, {useState} from 'react';

const Printname = () => {
    const[name, setName] = useState('Thasni');
    // const resetName=()=>{
    //     setName("")
    // }
    return (
        <div>
            <h1>Welcome {name}</h1>
            {/* <button onClick={resetName}>RESET</button> */}
            <button onClick={()=>setName("")}>RESET</button>
        </div>
    );
}

export default Printname;
