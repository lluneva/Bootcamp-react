import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import userimage from "../../assets/user-icon.png";
import "./Usercard.css";

class Usercard extends Component {
  render() {
    const { username, description, userimage } = this.props;

    return (
      <Card className="Usercard mb-5">
        <CardImg top width="50%" src= { userimage } alt="User image" />
        <CardBody>
          <CardTitle className="Usercard__card-title">{username}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Usercard;
