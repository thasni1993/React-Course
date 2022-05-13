import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import India from "./India";
import World from "./World";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class Covid extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<India />} />
            <Route exact path="/India" element={<India />} />
            <Route exact path="/World" element={<World />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Covid;
