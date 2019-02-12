import React, { Component } from "react";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Userlist from "./components/Userlist/Userlist";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        
          <div className="row">
            <div className="Posts col-8">
              <Posts />
            </div>
            <div className="Userlist col-4">
              <Userlist />
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;
