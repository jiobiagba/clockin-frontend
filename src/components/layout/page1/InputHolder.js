import React, { Component } from "react";

export default class InputHolder extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
  };

  onFill = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getClockInDetails(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  render() {
    return (
      <div style={mainStyle}>
        <h3>Welcome</h3>
        <div>
          <form onSubmit={this.onSubmit} style={formstyle}>
            <input
              style={inputStyle}
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.onFill}
              placeholder="Enter First Name Here"
            />
            <input
              style={inputStyle}
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.onFill}
              placeholder="Enter Last Name Here"
            />
            <input
              style={inputStyle}
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onFill}
              placeholder="Enter Email Here"
            />
            <input style={buttonStyle} type="submit" value="ClockIn" />
          </form>
        </div>
      </div>
    );
  }
}

const mainStyle = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
};

const formstyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const inputStyle = {
  width: "80%",
  padding: "10px",
  margin: "10px 0px",
  border: "0",
  borderBottom: "2px solid #eee",
};

const buttonStyle = {
  appearance: "none",
  width: "20%",
  fontWeight: "600",
  padding: "10px",
  margin: "10px 0px",
  border: "0",
  borderRadius: "10px",
  boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
  cursor: "pointer",
};
