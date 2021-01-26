import React, { Component } from "react";
import InfoTable from "./InfoTable";

export default class ResponseDisplay extends Component {
  newResBody = {
    error: this.props.resBody.error,
    data: this.props.resBody.result,
  };
  render() {
    return (
      <div style={mainStyle}>
        <h4>{this.props.resBody.message}</h4>
        <InfoTable newResBody={this.newResBody} />
      </div>
    );
  }
}

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "10px",
};
