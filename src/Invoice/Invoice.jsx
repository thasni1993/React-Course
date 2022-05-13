import React, { Component } from "react";
import { getInvoices } from "./Data";
import { Routes, Route, NavLink } from "react-router-dom";

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: getInvoices(),
    };
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
            margin: "2rem 0",
          }}
          style={{ textDecoration: "none" }}
        ></nav>
        
        <div>
          <input type={"text"} />
          <ul>
            {this.state.invoices.map((dat, key) => {
              return (
                <li>
                  <NavLink
                    style={({ isActive }) => ({
                      display: "block",
                      margin: "2rem 0",
                      color: isActive ? "red" : "",
                    })}
                    to={`/Invoice/${dat.number}`}
                  >
                    {dat.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Routes>
            <Route exact path="/Invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Invoice;
