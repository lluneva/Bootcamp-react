import React, { Component } from "react";
import userimage from "../../assets/user-icon.png";
import Usercard from "../Usercard/Usercard.js";
import './Userlist.css'

const users = [
  {
    username: "username1",
    description: "superwoman",
    image: userimage
  },
  {
    username: "username2",
    description: "superman",
    image: userimage
  },
  {
    username: "username3",
    description: "aquaman",
    image: userimage
  },
  {
    username: "username4",
    description: "wonder woman",
    image: userimage
  }
];

class Userlist extends Component {
    render () {
        return (
            <div className="Userlist"> 
            {users.map((user,i) => (
                <Usercard
                key ={i}
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
