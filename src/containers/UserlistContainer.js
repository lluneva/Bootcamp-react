import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/userActions";
import Userlist from "../components/Userlist/Userlist";
import { Spinner } from "reactstrap";

class UserlistContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    // console.log(this.props);
    // the users should be visible with the console log above in console
    const { users } = this.props;
    if (!users) {
      return (
        <div>
          <Spinner color="warning" />
          loading
        </div>
      );
    }

    return <Userlist users={users}/>;
  }
}
 /* this is the state of the store, and it is mapped to props*/
const mapStateToProps = state => {
  return {
    users: state.getUsersReducer.users
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserlistContainer);
