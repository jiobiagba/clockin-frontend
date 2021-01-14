import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={() => {
                <React.Fragment>
                  <h2>Clock in here!</h2>
                </React.Fragment>;
              }}
            />
            <Route
              path="/all-clockins"
              render={() => {
                <h2>All ClockIns Are Here</h2>;
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
