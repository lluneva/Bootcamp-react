import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: "",
      usernameInput: "",
      passwordInput: ""
    };
  }
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
      const {emailInput, passwordInput, usernameInput} =this.state;
      const {onRegister} =this.props;
    return (
      <div className="Register">
     
        <div className="Register__content">
          <h2> Register </h2>
          <form>
            <div className="form-group ">
              <label>username</label>
              <input type="text" name="usernameInput" value={usernameInput} className="form-control" onChange={this.onInputChange}/>
            </div>
            <div className="form-group ">
              <label>email</label>
              <input type="email" name="emailInput" value={emailInput} className="form-control" onChange={this.onInputChange} />
            </div>
            <div className="form-group">
              <label> password</label>
              <input type="password" name="passwordInput" value={passwordInput} className="form-control" onChange={this.onInputChange} />
            </div>
          </form>
          <Button  onClick= {()=>onRegister (usernameInput, emailInput, passwordInput)}>Register</Button>
        </div>
      </div>
    );
  }
}

export default Register;
