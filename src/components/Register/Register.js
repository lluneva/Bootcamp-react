import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
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
    const { emailInput, passwordInput, usernameInput } = this.state;
    const { onRegister } = this.props;
    return (
      <div className="Register">
        <div className="Register__content">
          <h2> Register </h2>
          <form>
            <div className="form-group ">
              <label>username</label>
              <input
                type="text"
                className="form-control"
                name="usernameInput"
                value={usernameInput}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group ">
              <label>email</label>
              <input
                type="email"
                className="form-control"
                name="emailInput"
                value={emailInput}
                onChange={this.onInputChange}
              />
            </div>
            <div className="form-group">
              <label> password</label>
              <input
                type="password"
                className="form-control"
                name="passwordInput"
                value={passwordInput}
                onChange={this.onInputChange}
              />
            </div>
          </form>
          <Button
            onClick={() => onRegister(usernameInput, emailInput, passwordInput)}
          >
            Register
          </Button>
          <div className="Register__content__link">
            <Link to="/login">already registered?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
