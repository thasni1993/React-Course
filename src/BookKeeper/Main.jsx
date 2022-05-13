import React, { Component } from "react";
import Invoices from "./Invoices";
import Invoice from "./invoice";
import Expenses from "./Expenses";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<App />}>
              <Route exact path="/invoices" element={<Invoices />}>
                <Route index element={<p>Select an Invoice</p>} />
                <Route path=":invoiceId" element={<Invoice />} />
              </Route>
              <Route exact path="/Expenses" element={<Expenses />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Main;
