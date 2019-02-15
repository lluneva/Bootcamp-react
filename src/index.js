import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import dotenv from "dotenv";
import App from "./App";
// import Login from "./components/Login/Login";
import RegisterContainer from "./containers/RegisterContainer";
import LoginContainer from "./containers/LoginContainer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

dotenv.config();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);
// creating store; with 3 args , and the 2nd is a default state (if the page hasnt loaded yet)
//reduxThunk- is needed for async functions; as redux by default is synchronous

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

// when this is called  it starts with calling the constructor of the specific component
ReactDOM.render(<Root />, document.getElementById("root"));
