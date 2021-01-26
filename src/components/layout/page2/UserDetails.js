import React, { Component } from "react";
import DetailsTable from "./DetailsTable";
class UserDetails extends Component {
  render() {
    return (
      <div>
        <DetailsTable data={this.props.newResBody} />
      </div>
    );
  }
}

export default UserDetails;
