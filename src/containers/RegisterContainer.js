import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../redux/actions/userActions.js";
import Register from "../components/Register/Register.js";

class RegisterContainer extends Component {
  // we receive these values from inputs
  onRegister = (username, email, password) => {
    //let's check if there are enetered values, if no-return
    if (!username || !email || !password) {
      return;
    } // if all is ok, we set params to register
    this.props.register(username, email, password);
  };

  render() {
    const { isRegistered } = this.props;
    // console.log(this.props); //  sis rada consolee rezultatu
    return isRegistered ? (
      <Redirect to="/login" /> 
      // making a redirect if Registering is successful
    ) : (
      <Register onRegister={this.onRegister} />
    );
  }
}

// what values i want to see within component
const mapStateToProps = state => {
  return {
    isRegistered: state.registerReducer.isRegistered
  };
};

const mapDispatchToProps = {
  register
};

// this is what our component will receive
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
