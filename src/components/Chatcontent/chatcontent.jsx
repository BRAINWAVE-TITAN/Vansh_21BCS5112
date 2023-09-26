import React, { Component, createRef } from "react";
import "../../styles/chatcontent.css";
import Profile from "../../components/Chatlist/profile";
import ChatItem from "./chatitem";
import usericon from '../../images/user-icon.png';
import userimage from '../../images/user-img.jpg';
import userimagetwo from '../../images/user-img2.jpg';
import userimagethree from '../../images/user-img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faPlus,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default class chatcontent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:userimage,
      type: "",
      msg: "Hi Webwizardry, How are you?",
    },
    {
      key: 2,
      image: userimagetwo,
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:userimagethree,
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:userimage,
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:usericon,
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:userimage,
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:userimagethree,
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }
  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:userimage,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };
  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Profile
                isOnline="active"
                image={userimage}/>
              <p>Vansh</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
              <i><FontAwesomeIcon icon={faGear} /></i>
              </button>
            </div>
            <div className="card__content">
            We are the team WebWizardry, participating in frontend competition, making different designs to showcase our skills and accuracy towards development.
          </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
            <FontAwesomeIcon icon={faPlus} />
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
            <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}