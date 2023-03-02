import React from "react";
import { useSelector } from "react-redux";

const Message= ({prop}) => {

   
  if(prop != undefined && prop != null) {
    return (
      <div className="message">
        <h2>Greeting</h2>
        <p><span>Text:</span> {prop.content}</p>
        <p><span>Created at:</span> {prop.created_at}</p>
      </div>
    );
  } else {
    return (
      <div className="message">
        <h2>Greeting</h2>
        <p>No greeting to display</p>
      </div>
    );
  }
}

export default Message; 