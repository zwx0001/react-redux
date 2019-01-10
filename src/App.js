import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routers, routerMap } from "./router";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>{routerMap(routers)}</Switch>
        </Router>
      </div>
    );
  }
}

export default App;
