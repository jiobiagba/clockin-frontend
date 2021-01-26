import React, { Component } from "react";
import ResultTable from "./ResultTable";

class InfoTable extends Component {
  clockoutStyle = () => {
    return {
      display: this.props.newResBody.error === true ? "none" : "table-cell",
      appearance: "none",
      width: "20%",
      fontWeight: "600",
      padding: "10px",
      margin: "10px 0px",
      textAlign: "center",
      border: "0",
      borderRadius: "10px",
      boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
      cursor: "pointer",
    };
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ResultTable newResBody={this.props.newResBody} />
        <input style={this.clockoutStyle()} type="submit" value="ClockOut" />
      </div>
    );
  }
}

export default InfoTable;
