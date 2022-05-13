import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            value:0
        }
    }

    increment(){
       setTimeout(() => {
           this.setState((prev,props)=>({value:(prev.value+1)}))
       }, 1000);
    }
    

    render() {
        this.increment();
        return (
            <div>
                {this.state.value}
            </div>
        )
    }
}
