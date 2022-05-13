import React,{useState} from 'react';

const Printdata = () => {
    const[name,email] = useState();
    return (
        <div>
            <form method='post' autoComplete='off'>
            <input type="text" name='name' value=''/>
            <input type="email" name='email' value=''/>
            </form>
        </div>
    );
}

export default Printdata;
