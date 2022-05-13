import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Invoice from "./Invoice";
import Expenses from "./Expenses";
// import Display from './Display';
import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <h2>Book Keeper</h2>
        <Router>
          <div className="mainDiv" style={{ borderBottom: "1px solid" }}>
            <ul>
              <li className="li-tag">
                <Link to="/Invoice">Invoice</Link>
              </li>{" "}
              |{" "}
              <li className="li-tag">
                <Link to="/Expenses">Expenses</Link>
              </li>
            </ul>
          </div>

          <Routes>
            <Route exact path="/Invoice" element={<Invoice />} />
            <Route exact path="/Expenses" element={<Expenses />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
