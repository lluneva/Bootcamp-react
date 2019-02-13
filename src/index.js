import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import dotenv from "dotenv";
import App from "./App";
import Login from "./components/Login/Login";
import RegisterContainer from "./containers/RegisterContainer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

dotenv.config();

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
// creating store; with 3 args , and the 2nd is a default state (if the page hasnt loaded yet)
//reduxThunk- is needed for async functions; as redux by default is synchronous

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={RegisterContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
