import React, { Component } from "react";
import "../styles/chatbody.css";
import Chatlist from "../components/Chatlist/chatlist";
import ChatContent from "../components/Chatcontent/chatcontent";
import User from "./User";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <Chatlist />
        <ChatContent />
        <User/>
      </div>
    );
  }
}