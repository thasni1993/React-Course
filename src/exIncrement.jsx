import React, { Component } from 'react'

export default class exIncrement extends Component {
    constructor(props){
        super(props);
        this.state ={
            number: 0
        }
    }
    
    incrementNumber = (e) =>{
        e.preventDefault();
        this.setState((prev,props)=>({
         number : prev.number + 1
        }))
    }
    decrementNumber = (e) =>{
        e.preventDefault();
        this.setState((prev,props)=>({
            number : prev.number - 1
        }))
    }
    render() {
        return (
            <div>
                <form>
                   <div>

                   <input type="submit" value="+" onClick={this.incrementNumber}/>

                    
                    <input type="text" value={this.state.number}/>

                    
                    <input type="submit" value="-" onClick={this.decrementNumber}/>
                    </div>
                    

                </form>
            </div>
        )
    }
}
