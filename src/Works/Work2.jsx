import React, { Component } from 'react';
import './Work2.css';

class Work2 extends Component {
    constructor(props){
        super(props);
        this.state={
            fnum : 0,
            snum : 0,
            res : ""
        }
    }
    inputSet=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:[e.target.value]});
    }
    
    largestNum = () => {
        var res=Math.max(this.state.fnum,this.state.snum);
        this.setState({res:res});
    }
    smallestNum = () => {
        var res=Math.min(this.state.fnum,this.state.snum);
        this.setState({res:res});
    }

    render() {
        return (
            <div className='mainDiv'>
                <h2>To Find Largest and Smallest Number</h2> 
                <div className='secDiv'>            
                    Enter number 1 : <input type="text" name="fnum" onChange={this.inputSet}></input><br/>
                    Enter number 2 : <input type="text" name="snum"onChange={this.inputSet}></input><br/>
                    <button onclick="largesstNum()" onClick={this.largestNum}>Largest</button>
                    <button onclick="smallestNum()" onClick={this.smallestNum}>Smallest</button>
                </div>
                <div className='thirdDiv'>
                    <br/>
                    Result : <input type={'text'} readOnly value={this.state.res}/>
                </div>
            </div>
        );
    }
}   

export default Work2;
