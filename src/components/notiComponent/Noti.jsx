import React from 'react';
import Message from './Message';
import "../../style/noti.css";
import {NotiContext} from "../App";

const Messages = [
  {
    avatar: "H",
    name: "Hoang Inc",
    text: "has posted a new activity"
  }, {
    avatar: "A",
    name: "Anh Inc",
    text: "'s activity has reached targer"
  }
];

const Noti = () => {
  const openNoti = React.useContext(NotiContext)[0];
  return (
    openNoti ? <div className="comment-container">
        {Messages.map((message) => {
          return <Message content={message} />
        })}
    </div> : null
  )
}

export default Noti;