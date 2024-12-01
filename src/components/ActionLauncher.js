import React from "react";
import "./style.css";

const ActionLauncher = () => {
  return (
    <div className="action-launcher-container">
      {/* Ask Catura Section */}
      <div className="ask-catura-section">
        <h4 className="section-title">Ask Catura</h4>
        <div className="ask-catura-content">
          <textarea
            className="message-input"
            placeholder="Type a message..."
          ></textarea>
          <button className="send-button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Action Launcher Section */}
      <div className="action-launcher-section">
        <h4 className="section-title">Action Launcher</h4>
        <div className="action-launcher-search">
          <input type="text" placeholder="Search actions..." />
        </div>
        <div className="action-launcher-buttons">
          <button className="action-button">Add Action</button>
          <button className="action-button">Fee Reversal</button>
          <button className="action-button">Admin Update</button>
        </div>
      </div>

      {/* Case Favorite Section */}
      <div className="case-favorite-section">
        <h4 className="section-title">Case Favorite</h4>
        <div className="case-item">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
          <button className="case-button">Photo</button>
        </div>
        <div className="case-item">
          <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
          <button className="case-button">Text</button>
        </div>
      </div>
    </div>
  );
};

export default ActionLauncher;
