import React, { Component } from "react";
import "../../styles/chatlist.css";
import ChatListItems from "./chatlistitem";
import usericon from '../../images/user-icon.png';
import userimage from '../../images/user-img.jpg';
import userimagetwo from '../../images/user-img2.jpg';
import userimagethree from '../../images/user-img3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMagnifyingGlass, faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default class chatlist extends Component {
  allChatUsers = [
    {
      image:userimage,
      id: 1,
      name: "Vansh",
      active: true,
      isOnline: true,
    },
    {
      image:userimagetwo,
      id: 2,
      name: "Priyansh",
      active: false,
      isOnline: false,
    },
    {
      image:userimagethree,
      id: 3,
      name: "Saumya",
      active: false,
      isOnline: false,
    },
    {
      image:userimage,
      id: 4,
      name: "Satyam",
      active: false,
      isOnline: true,
    },
    {
      image:usericon,
      id: 5,
      name: "Shruti",
      active: false,
      isOnline: false,
    },
    {
      image:userimagethree,
      id: 6,
      name: "Aryan",
      active: false,
      isOnline: true,
    },
    {
      image:userimage,
      id: 7,
      name: "WebWizardry",
      active: false,
      isOnline: true,
    },
    {
      image:usericon,
      id: 8,
      name: "Yash",
      active: false,
      isOnline: false,
    },
    {
      image:usericon,
      id: 9,
      name: "Abhinav",
      active: false,
      isOnline: true,
    },
    {
      image: usericon,
      id: 10,
      name: "Kashish",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
        <i><FontAwesomeIcon icon={faPlus} /></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
          <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}