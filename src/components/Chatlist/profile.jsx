import React, { Component } from "react";

export default class profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <div className="profile-img">
          <img src={this.props.image} alt="#" />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}