import React,{ useContext } from 'react';
import { newContext} from './UseContextWrk';

export default function UseContextWrk2() { 
  const value =  useContext(newContext); 
  return(
    <div>
         <label>You Clicked {value} times.</label> 
    </div>
  );
}
