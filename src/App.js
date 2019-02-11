import React, { Component } from "react";
import Posts from "./components/Posts/Posts";
import Userlist from "./components/Userlist/Userlist"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col-8">
            <Posts />
            {/* this is a selfclosing element */}
            {/* { 4+ 4 } */}
          </div>
          <div className="Userlist col-4"> 
          <Userlist/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
