import React, { Component } from "react";
import "../page1/ResultTable.css";

export default class DetailsTable extends Component {
  _innerRender() {
    return Object.keys(this.props.data).map((val) => {
      return (
        <tr key={val}>
          <td>{val}</td>
          <td>{this.props.data[val].toString()}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="ResultTable">
        <table>
          <tbody>{this._innerRender()}</tbody>
        </table>
      </div>
    );
  }
}
