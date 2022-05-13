import React, { Component } from 'react'

export default class ListAdd extends Component {
    constructor(props){
        super(props);
        this.state={
            items : [1,2,3,4,5]
        }
    }
    
    render() {
            var lists = this.state.items.map(function(x)
            {
                
                return <li>{x+1}</li>
            })
    
        return (
            <div>
                {lists}
                {/* {
                this.state.items.map(x,key)=><li>{x+1}</li>
                } */}
            </div>
        )
    }
}
