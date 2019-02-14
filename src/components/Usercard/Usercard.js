import React, { Component } from "react";
// import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import "./Usercard.css";

class Usercard extends Component {
  render() {
    const { username, description, userimage } = this.props;

    return (
      <div className="UserCard">
        <div className="UserCard__image">
          <img
            className="UserCard__image__img "
            src={userimage}
            alt="something"
          />
        </div>
        <div className="UserCard__content">
          <div className="UserCard__content__title">{username}</div>
          <div className="UserCard__content__description">{description}</div>
        </div>
      </div>
    );
  }
}

export default Usercard;
