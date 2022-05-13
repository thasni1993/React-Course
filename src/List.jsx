import React, { Component } from 'react'

export default class List extends Component {

    constructor(props){
        super(props);
        this.state={
            items : ["apple","orange","cherry"]
        }
    }


    render() {

         var list = this.state.items.map(function(a,key){
             return <li>{a}</li>
         })

        return (
            <div>
                {list}
            </div>
        )
    }
}
