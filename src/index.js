import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById("root"));
