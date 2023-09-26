import React, { Component } from "react";
import Profile from "../../components/Chatlist/profile";

export default class chatitem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>1 mins ago</span>
            <span>Seen 1:00PM</span>
          </div>
        </div>
        <Profile isOnline="active" image={this.props.image} />
      </div>
    );
  }
}