import React, { Component } from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "./Data";

export default function Invoices() {
  let invoices = getInvoices();
  //let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => ({
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            })}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
