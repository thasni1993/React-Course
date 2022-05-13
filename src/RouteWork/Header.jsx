import "./ExampleIndex.css"
import logo2 from "./logo2.png";

import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="logo">
                <img src={logo2} alt="logo" />
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            
        </nav>
        </div>
        )
    } 
}