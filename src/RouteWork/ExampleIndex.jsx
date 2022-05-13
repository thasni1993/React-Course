import React from "react";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import "./ExampleIndex.css";



export default function ExampleIndex(){
    return(
<div className="mainDiv">   
    <Router>
        <Header/>
        <div className="divarea"> </div>
        <div className="homeRoute">
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        </Routes>
        </div>
        <div className="divarea"></div>
        <Footer/>
    </Router>
</div>
    )
}