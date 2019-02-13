import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../redux/actions/userActions.js";
import Login from "../components/Login/Login.js";

class LoginContainer extends Component {
  onLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    this.props.login(email, password);
  };

  render() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? <Redirect to="/" /> : <Login onLogin={this.onLogin} />;
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = {
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
