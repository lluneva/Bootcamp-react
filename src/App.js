import React, { Component } from "react";
import Header from "./components/Header/Header";
// import Posts from "./components/Posts/Posts";
import UserlistContainer from "./containers/UserlistContainer";

import "./App.css";
import PostsContainer from "./containers/PostsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="Posts col-8">
              <PostsContainer />
            </div>
            <div className="Userlist col-4">
              <UserlistContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
