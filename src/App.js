import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import InputHolder from "./components/layout/page1/InputHolder";
import ResponseDisplay from "./components/layout/page1/ResponseDisplay";
import UserHolder from "./components/layout/page2/UserHolder";
class App extends Component {
  resBody = {
    error: false,
    message: "Clockin Successful",
    result: {
      name: "Ada Ehi",
      department: "Department A",
      clockin_time: new Date(),
    },
  };

  state = {
    allClockIns: [
      {
        name: "John Bosco",
        department: "Department A",
        clockin_time: new Date(1000000000000),
        display: false,
      },
      {
        name: "Ada Ehi",
        department: "Department B",
        clockin_time: new Date(200000000000),
        display: false,
      },
      {
        name: "Mata Paul",
        department: "Department C",
        clockin_time: new Date(300000000000),
        display: false,
      },
      {
        name: "Ehis Julia",
        department: "Department D",
        clockin_time: new Date(400000000000),
        display: false,
      },
    ],
  };

  getClockInDetails(obj) {
    console.log("Form Details:  ", obj);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/">
                <InputHolder getClockInDetails={this.getClockInDetails} />
                <ResponseDisplay resBody={this.resBody} />
              </Route>
              <Route path="/all-clockins">
                <UserHolder resBody={this.state.allClockIns} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
