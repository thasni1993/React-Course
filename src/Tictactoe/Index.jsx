import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./Board";
import Scoreboard from "./scoreboard";
import "./bordBox.css";
import "./board.css";
import "./buttons.css";

class Index extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Scoreboard/>} />
            <Route exact path="/Board" element={<Board/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default Index;
