import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Login from './Login';
import Reg from './Registration';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/reg" element={<Reg/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
