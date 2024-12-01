import React from "react";
import "./style.css";

const Conversation = () => {
  return (
    <div className="conversation">
      {/* Tabs Section */}
      <div className="tabs">
        <button className="tab active">Conversation</button>
        <button className="tab">Address Update</button>
        <button className="tab">Fee Reversal</button>
        <button className="tab">Returns</button>
        <button className="tab escalate-btn">Escalate</button>
      </div>
      <div className="message-headings">
            <h5>Conversation</h5>
            <h5>Attachment</h5>
        </div>
      {/* Messages Section */}
      <div className="messages">
        <div className="contact">
            <div className="contact-icon">
                <h4>CB</h4>
            </div>
            <div className="message-header">
                <span className="message-sender">Rachel Adams</span>
                <div className="span-container">
                    <span className="message-time">9:08 PM</span>
                    <span className="message-status">Received by WhatsApp</span>
                </div>
            </div>
        </div>
        <div className="message received">
            <p className="message-text">
                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat malesuada quis ut elementum praesent imperdiet.
            </p>
        </div>

        <div className="message sent">
          <div className="contact">
            <div className="contact-icon">
                <h4>YOU</h4>
            </div>
            <div className="message-header">
                <span className="message-sender">You</span>
                <div className="span-container">
                    <span className="message-time">27 Jul, 2024, 9:08 PM</span>
                    <span className="message-status">Sent by WhatsApp</span>
                </div>
            </div>
        </div>
        <div className="message-header">
            <p className="message-text">
                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat malesuada quis ut elementum praesent imperdiet.
            </p>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="message-input">
        <div className="input-options">
          <button className="option-btn">SMS</button>
          <button className="option-btn">WhatsApp</button>
          <button className="option-btn">Email</button>
        </div>
        <div className="input-field">
          <input type="text" placeholder="Type a message..." />
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
