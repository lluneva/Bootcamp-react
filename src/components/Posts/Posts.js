import React, { Component } from "react";
import defaultPlaceholderImg from "../../assets/placeholder.svg";
import PostCard from "../PostCard/PostCard.js";
import "./Posts.css";

// const posts = [
//   {
//     title: "Some title1",
//     description: "some description1",
//     image: placheolderImg
//   },
//   // this represents how data from server should be received
//   {
//     title: "Some title2",
//     description: "some description2",
//     image: placheolderImg
//   },
//   {
//     title: "Some title3",
//     description: "some description3",
//     image: placheolderImg
//   },
//   {
//     title: "Some title4",
//     description: "some description4",
//     image: placheolderImg
//   },
//   {
//     title: "Some title5",
//     description: "some description5",
//     image: placheolderImg
//   }
// ];

class Posts extends Component {
  render() {
    return (
      <div className="Posts">
        {this.props.posts && this.props.posts.map((post, i) => (
          <PostCard
            key={i}
            title={post.title}
            description={post.description}
            image={post.media.path || defaultPlaceholderImg}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
