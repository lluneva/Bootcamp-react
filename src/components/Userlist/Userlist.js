import React, { Component } from "react";
import defaultUserImg from "../../assets/user-icon.png";
import Usercard from "../Usercard/Usercard.js";
import "./Userlist.css";

// const users = [
//   {
//     username: "MarionB",
//     description: "superwoman",
//     image: userimage
//   },
//   {
//     username: "John",
//     description: "spiderman",
//     image: userimage
//   },
//   {
//     username: "Rogan",
//     description: "aquaman",
//     image: userimage
//   },
//   {
//     username: "username4",
//     description: "wonder woman",
//     image: userimage
//   },
//   {
//     username: "granB",
//     description: "the invisible man",
//     image: userimage
//   }
// ];

class Userlist extends Component {
  render() {
    return (
      <div className="Userlist  ">
        <h4> Users </h4>
        <div className="scrollbar scrollbar-primary">
          {this.props.users &&
            this.props.users.map((user, index) => (
              <Usercard className="Usercard__user"
                key={`userCard${index}`}
                username={user.username}
                email={user.email}
                description={user.description}
                userimage={user.userimage || defaultUserImg}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Userlist;
