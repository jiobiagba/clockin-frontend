import React, { Component } from 'react'
import "./ResultTable.css"

class ResultTable extends Component {
    _renderAsArray() {
        return Object.keys(this.props.newResBody.data).map((val) => {
            return (
                <tr key={val}>
                    <td>{val}</td>
                    <td>{this.props.newResBody.data[val].toString()}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="ResultTable">
                <table>
                    <tbody>
                        {this._renderAsArray()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultTable