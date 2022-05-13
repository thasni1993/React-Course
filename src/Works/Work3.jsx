import React, { Component } from 'react';

class Work3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname : "",
            Name: "",
            gender:"",
            Gender:"",
            marrie:"",
            dept:"",
            Department:"",
            mark1:0,
            mark2:0,
            mark3:0,
            total:0,
            grade:""
        }
    }
    inputSet = (e) => {
        this.setState({[e.target.name]:[e.target.value]});        
    }
    saveData=(f)=>{
        f.preventDefault();
       
        var Gender, name;
        if(this.state.gender == "M"){
            name = "Mr " + this.state.fname+" "+this.state.lname;   
        }
        else{
            name = "Miss/Mrs. " + this.state.fname+" "+this.state.lname;
        }
        this.setState({
            Name: name,
            Gender: this.state.gender,
            Department: this.state.dept
        });
        var tot = parseInt(this.state.mark1) + parseInt(this.state.mark2) + parseInt(this.state.mark3);
        this.setState({total:tot})

        if(tot>=280 && tot <= 300)
        {
            this.setState({grade:"A"})
        }
        else if(tot>=260 && tot <=279)
        {
            this.setState({grade:"B"})
        }
        else if(tot>=230 && tot<=259)
        {
            this.setState({grade:"C"})
        }
        else
        {
            this.setState({grade:"D"})
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Form</h2>
                    First Name :<input type="text" name='fname' onChange={this.inputSet}/><br/>
                    Last Name :<input type={"text"} name='lname'onChange={this.inputSet}/><br/>
                    Gender :<input type={"radio"} name='gender' value={"M"} onChange={this.inputSet}/>Male
                            <input type={"radio"} name='gender' value={"F"} onChange={this.inputSet}/>Female<br/>
                    {/* Marital Status:<input type={"radio"} name="marrie" value={"Ma"} onChange={this.inputSet} />Married
                                   <input type={"radio"} name="marrie" value={"Un"} onChange={this.inputSet}/>Unmarried<br/> */}
                    Department :<select name='dept' onChange={this.inputSet}>
                            <option>--SELECT--</option>
                            <option>MCA</option>
                            <option>MBA</option>
                            <option>B.Tech</option>
                            <option>M.tech</option>
                        </select><br/>
                    Mark1: <input type={"text"} name='mark1' onChange={this.inputSet}/><br/>
                    Mark2: <input type={"text"} name='mark2' onChange={this.inputSet}/><br/>
                    Mark3: <input type={"text"} name='mark3' onChange={this.inputSet}/><br/>
                    <button onClick={this.saveData}>CALCULATE</button>

                </div>
                <br/>
                <div>
                    <h2>Result</h2>
                     Full Name: <input type={"text"} readOnly value={this.state.Name}  name="full"/><br/>
                     Gender: <input type={"text"} readOnly value={this.state.Gender} name='gender'/><br/>
                     Department: <input type={"text"} readOnly value={this.state.Department} name='dept'/><br/>
                     Total Mark: <input type={'text'} readOnly value={this.state.total} name='total'/><br/>
                     Grade: <input type={"text"} readOnly value={this.state.grade} name="grade"/>
                </div>
            </div>
        );
    }
}

export default Work3;
