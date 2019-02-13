import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../redux/actions/userActions.js";
import Register from "../components/Register/Register.js";

class RegisterContainer extends Component {
  onRegister = (username, email, password) => {
    //let's check if there are enetered values, if no-return
    if (!username || !email || !password) { 
      return;
    }
    this.props.register(username, email, password);
  };

  render() {
    const { isRegistered } = this.props;
    console.log(this.props); //  sis rada consolee rezultatu
    return isRegistered ? (
      <Redirect to="/login" /> // making a redirect if Registering is successful
    ) : (
      <Register onRegister={this.onRegister} />
    );
  }
}
const mapStateToProps = state => { // what values i want to see within component
  return {
    isRegistered: state.registerReducer.isRegistered
  };
};

const mapDispatchToProps = {
  register
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
