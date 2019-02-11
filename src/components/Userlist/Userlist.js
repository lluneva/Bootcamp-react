import React, { Component } from "react";
import userimage from "../../assets/user-icon.png";
import Usercard from "../Usercard/Usercard.js";

const users = [
  {
    username: "username 1 is here",
    description: "some description from user1",
    image: userimage
  },
  {
    username: "username2",
    description: "some description from user2",
    image: userimage
  },
  {
    username: "username3",
    description: "some description from user3",
    image: userimage
  }
];

class Userlist extends Component {
    render () {
        return (
            <div className="Userlist">
            {users.map(user=> (
                <Usercard
                username={user.username}
                description ={user.description}
                userimage={user.image}
                />
            ))}
            </div>
        );
    }
}

export default Userlist;
