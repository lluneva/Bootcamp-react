import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: "", //this is the default value in form
      passwordInput: ""
    };
  }

  //   onEmailChange = e => {
  //     this.setState({ emailInput: e.target.value });
  //   };

  //   onPasswordChange = e => {
  //     this.setState({ passwordInput: e.target.value });
  //   };
// the following function is combination of the 2 above
  onInputChange = e => {//e is an event
    this.setState({ [e.target.name]: e.target.value }); 
    //e.target is an input that is being entered in the placeholder
  };

  render() {
    const { emailInput, passwordInput } = this.state;
    //   const {passwordInput} =this.state;
    return (
      <div className="Login">
        <div className="Login__content">
          <h2> Login </h2>
          <form>
            <div className="form-group ">
              <label>email</label>
              <input
                onChange={this.onInputChange}
                type="email"
                name="emailInput"
                className="form-control"
                value={emailInput}
              />
            </div>
            <div className="form-group">
              <label> password</label>
              <input
                type="password"
                name="passwordInput"
                onChange={this.onInputChange}
                className="form-control"
                value={passwordInput}
              />
            </div>
          </form>
          <Button>Login</Button>

        </div>
      </div>
    );
  }
}

export default Login;
