import React, { Component } from 'react';
import { Navigate } from 'react-router';
class Registration extends Component {
    render() {
        return (
            <div>
               <Navigate replace to="/"/>
            </div>
        );
    }
}

export default Registration;
