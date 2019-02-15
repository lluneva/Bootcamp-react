import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
// import placheolderImg from "../../assets/placeholder.svg";
import "./PostCard.css";

class PostCard extends Component {
  render() {
      const {title, description, image} = this.props;

    return (
      <Card className="PostCard">
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody className="PostCard__cardBody">
          <CardTitle className="PostCard__card-title">{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    );
  }
}
export default PostCard;
