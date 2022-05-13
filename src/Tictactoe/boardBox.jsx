import React, { Component } from 'react';
import "./bordBox.css";

export const Box = (props) =>{
    return (
        <button className='board_box' onClick={props.onClick}> 
            {props.value}
        </button>
    )
}
