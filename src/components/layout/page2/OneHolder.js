import React, { Component } from "react";

class OneHolder extends Component {
  render() {
    return (
      <div style={holderStyle}>
        <p style={pStyle}>{this.props.name}</p>
        <button style={buttonStyle}>V</button>
      </div>
    );
  }
}

const holderStyle = {
  display: "flex",
  flexDirection: "space-between",
  padding: "10px",
  margin: "10px 0px",
  opacity: "0.5",
  // border: "none",
  borderRadius: "5px",
  background: "none",
  boxShadow: "0 0 15px 4px rgba(0,0,0,0.2)",
};

const pStyle = {
  flexBasis: "90%",
  padding: "5px",
};

const buttonStyle = {
  flexBasis: "5%",
  appearance: "none",
  // width: "20%",
  fontWeight: "300",
  padding: "5px",
  // margin: "10px 0px",
  border: "0",
  borderRadius: "80px",
  boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
  cursor: "pointer",
};

export default OneHolder;
