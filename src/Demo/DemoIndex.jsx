import React  from 'react';
import About from "./About";
import Contact from './Contact';
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Home from './Home';


export default function DemoIndex(){
        return (
            <Router>
            <div>
                <nav>
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/About">About</Link></span> 
                    <span><Link to="/Contact">Contact</Link></span>
                </nav>            
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Contact" element={<Contact/>} />
                    <Route exact path="/About" element={<About/>} />
                </Routes>
            </div>
        </Router>
    );
        }


