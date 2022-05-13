import React, { Component } from "react";
import india from "./india.png";
import { Card } from "react-bootstrap";
import StateData from "./StateData";
import axios from "axios";

class India extends Component {
  constructor(){
    super();
    this.state={
      data: {}
    }
  }
  componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
      this.setState({data:response.data});
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img src={india} alt="india" width="60px" height="50px"></img>
          <h3>INDIA</h3>
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card bg="info" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card bg="warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card bg="success"style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERED</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card bg="danger"style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>DEATH</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col-md-12">
            <div className="col-md-12">
              <StateData />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default India;
