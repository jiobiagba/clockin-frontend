import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header style={styleHeader}>
        <h1>Clock In App</h1>
        <Link style={styleLink} to="/">
          Clock In
        </Link>{" "}
        |{" "}
        <Link style={styleLink} to="/all-clockins">
          All ClockIns
        </Link>
      </header>
    );
  }
}

const styleHeader = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const styleLink = {
  color: "#fff",
  textDecoration: "none",
};

export default Header;
