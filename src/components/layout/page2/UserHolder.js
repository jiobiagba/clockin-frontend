import React, { Component } from 'react'
import OneHolder from "./OneHolder"
import UserDetails from "./UserDetails"

export default class UserHolder extends Component {
    render() {
        return this.props.resBody.map((obj) => {
            return (
                <div key={obj.name}>
                    <OneHolder name={obj.name.toString()} />
                    <UserDetails newResBody={obj} />
                </div>
            )
        })
    }
}
