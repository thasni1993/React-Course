import React, { Component } from "react";
import { Navigate } from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      password: " ",
      referrer: null,
    };
  }
  
  componentWillMount() {
    console.log("Inside WillMount");
  }
  componentDidMount() {
   
    console.log("Inside DidMount");
  }
  componentWillUpdate() {
    console.log("Inside Will Upadate");
  }
  componentDidUpdate() {
    console.log("Inside DidUpdate");
  }
  componentWillUnmount() {
    console.log("Inside Will Unmount");
  }

  handleClick = () => {
    console.log('Button is cliked!');
    this.setState({referrer: '/reg'});
}
  
  render() {
    const {referrer} = this.state;
        if (referrer)
        {
          return <Navigate to={referrer} />;}
        else{
    return (
      <div className="log">
      <h2>Login Here...</h2>
      <label>User Name</label>
      <input type={"text"} name="username" />
      <br />
      <label>Password</label>
      <input type={"password"} name="password" />
      <br />
      <button onClick={() => this.handleClick()}>LOGIN</button>
    </div>
        
    );
        }
  }
}
export default Login;
