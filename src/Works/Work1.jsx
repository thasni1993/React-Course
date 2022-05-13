import React, { Component } from 'react';

class Work1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            fno:0,
            sno:0,
            res:""
        }  
      
    }
    inputSet = (e) =>{
        this.setState({[e.target.name]:[e.target.value]}); 
    }
    numberAddition = (e) => {
        e.preventDefault(); 
        var res=parseInt(this.state.fno)+parseInt(this.state.sno);
        this.setState({res:res});
    }
    numberSubtraction = (e) => {
        e.preventDefault(); 
        var res=parseInt(this.state.fno)-parseInt(this.state.sno);
        this.setState({res:res});
    }
    numberMultiplication = (e) => {
        e.preventDefault(); 
        var res=parseInt(this.state.fno)*parseInt(this.state.sno);
        this.setState({res:res});
    }
    numberDivision = (e) => {
        e.preventDefault(); 
        var res=parseInt(this.state.fno)/parseInt(this.state.sno);
        this.setState({res:res});
    }
    
    render() {
        return (
            <div>
                <h2>Adding ,Subtracting,Multiplying and Dividing 2 Numbers</h2>
                 <div>
                <label>First Nmuber</label>
                <input type={"text"} name='fno' onChange={this.inputSet}  style={{margin:25 }}/><br/>

                <label>Second Number</label>
                <input type={"text"} name='sno' onChange={this.inputSet} /><br/>

                <button  style={{margin:10, padding:10}} onClick={this.numberAddition}>+</button>
                <button  style={{margin:10, padding:10}} onClick={this.numberSubtraction}>-</button>
                <button  style={{margin:10, padding:10}} onClick={this.numberMultiplication}>*</button>
                <button  style={{margin:10, padding:10}} onClick={this.numberDivision}>/</button>
            </div>
            <div>
                <label>RESULT</label>
                <input type={"text"} readOnly value={this.state.res} name='res'/>
            </div>
        </div>
        );
    }
}

export default Work1;
