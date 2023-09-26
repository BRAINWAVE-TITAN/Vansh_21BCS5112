import React, { Component } from "react";
import "../styles/nav.css";
import logo from "../images/logo.png";

export default class Nav extends Component {
  render() {
    return (
      <>
      <h1>Welcome To The WebWizardry Community</h1>
      <div className="nav">
        <div className="nav__blocks" style={{height: 80 + 'px'}}>
          <img src={logo}></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
      </>
    );
  }
}