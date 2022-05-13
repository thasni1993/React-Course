import React, { Component } from 'react';
import Invoice from './Invoice';
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from './MainPage';
import Expenses from './Expenses';
import Invoices from './Invoices';          

class Display extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path="/" element={<MainPage/>}/>
                    <Route exact path="Invoice" element={<Invoice/>}/>
                    <Route exact path="Expenses" element={<Expenses/>}/>
         </Routes> 
                <Route index element={
                    <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }/>

                <Route exact path=":invoiceId" element={<Invoices/>} />
                <Route exact path="*" element={<main style={{ padding: "1rem" }}>
                           <p>There's nothing here!</p>
            </main>} />
            </div>
        );
    }
}

export default Display;

